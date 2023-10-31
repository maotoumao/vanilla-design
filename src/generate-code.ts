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

(sourceFile.statements[0] as ts.InterfaceDeclaration).members.forEach(async (it: ts.PropertySignature) => {
    let compName = it.name.getText(sourceFile);
    compName = /^".*"$/.test(compName) ? compName.slice(1, -1): compName;
    const compProps = it.type.getText(sourceFile);
    const content = `export default function (props: ${compProps}) {
    return <${compName} {...props}></${compName}>
}`
    await fs.writeFile(gPath("lowerCase", `${compName}.tsx`), content, 'utf-8')
    await fs.writeFile(gPath("upperCase", `${compName.replace(/^(.)/, it => it.toUpperCase())}.tsx`), content, 'utf-8')
});


await fs.writeFile(gPath("index.css"), "", "utf-8")


