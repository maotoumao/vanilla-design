import ts from 'typescript';
import path from 'path';
import url from 'url';
import fs from 'fs/promises';


const srcFile = path.resolve(url.fileURLToPath(import.meta.url), '../react-elements.ts');
const program = ts.createProgram([srcFile], {
    target: ts.ScriptTarget.ES2016
});

const sourceFile = program.getSourceFile(srcFile);

await fs.mkdir("./generated-code/lower", {
    recursive: true
});
await fs.mkdir("./generated-code/upper", {
    recursive: true
});

(sourceFile.statements[0] as ts.InterfaceDeclaration).members.forEach(async (it: ts.PropertySignature) => {
    const compName = it.name.getText(sourceFile);
    const compProps = it.type.getText(sourceFile);
    const content = `export default function (props: ${compProps}) {
    return <${compName} {...props}></${compName}>
}`
    await fs.writeFile(`./generated-code/lower/${compName}.tsx`, content, 'utf-8')
    console.log(compName.replace(/^(.)/, it => it.toUpperCase()));
    await fs.writeFile(`./generated-code/upper/${compName.replace(/^(.)/, it => it.toUpperCase())}.tsx`, content, 'utf-8')
});
