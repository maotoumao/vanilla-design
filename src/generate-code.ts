import ts from 'typescript';
import path from 'path';
import url, { fileURLToPath } from 'url';
import fs from 'fs/promises';


const typeFilePath = path.resolve(url.fileURLToPath(import.meta.url), '../react-elements.ts');

const program = ts.createProgram([typeFilePath], {
    target: ts.ScriptTarget.ES2016
});

const sourceFile = program.getSourceFile(typeFilePath);

const baseGeneratedPath = path.resolve(fileURLToPath(import.meta.url), '../../g-src/');

function gPath(...args: string[]){
    return path.resolve(baseGeneratedPath, ...args);
}

await fs.mkdir(path.resolve(baseGeneratedPath, gPath('lowerCase')), {
    recursive: true
});
await fs.mkdir(gPath('upperCase'), {
    recursive: true
});


let importCode = '';
let exportModules: string[] = [];

await Promise.all((sourceFile.statements[0] as ts.InterfaceDeclaration).members.map(async (it: ts.PropertySignature) => {
    let compName = it.name.getText(sourceFile);
    compName = /^".*"$/.test(compName) ? compName.slice(1, -1): compName;
    const compProps = it.type.getText(sourceFile);
    const content = `export default function (props: ${compProps}) {
    return <${compName} {...props}></${compName}>
}`
    await fs.writeFile(gPath("lowerCase", `${compName}.tsx`), content, 'utf-8')
    importCode += `import _${compName} from "./lowerCase/${compName}.tsx";\n`;
    exportModules.push(`_${compName} as ${compName}`);

    const upperCompName = compName.replace(/^(.)/, it => it.toUpperCase());
    await fs.writeFile(gPath("upperCase", `${upperCompName}.tsx`), content, 'utf-8');
    importCode += `import _${upperCompName} from "./upperCase/${upperCompName}.tsx"\n`;
    exportModules.push(`_${upperCompName} as ${upperCompName}`);
}));

await fs.writeFile(gPath("index.css"), "", "utf-8");
await fs.writeFile(gPath("index.tsx"), `${importCode}

export { ${exportModules.join(', ')} };
`, 'utf-8')


const buildScripts = `
const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

esbuild.buildSync({
    entryPoints: [path.resolve(__dirname, 'index.tsx')],
    outdir: path.resolve(__dirname, '../dist'),
    bundle: true,
    minify: true
})

fs.copyFileSync(path.resolve(__dirname, 'index.css'), path.resolve(__dirname, '../dist/index.css'));
fs.copyFileSync(path.resolve(__dirname, '../package.json'), path.resolve(__dirname, '../dist/package.json'))
`

await fs.writeFile(gPath("build.cjs"), buildScripts, "utf-8");
