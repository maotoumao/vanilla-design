import ts from 'typescript';
import path from 'path';
import url from 'url';
type c = JSX.IntrinsicAttributes


const srcFile = path.resolve(url.fileURLToPath(import.meta.url), '../react-elements.ts');
console.log(srcFile);
const program = ts.createProgram([srcFile], {
    target: ts.ScriptTarget.ES2016
});

const sourceFile = program.getSourceFile(srcFile);

(sourceFile.statements[0] as ts.InterfaceDeclaration).members.forEach((it: ts.PropertySignature) => {
    console.log(it.name.getText(sourceFile));
    console.log(it.type.getText(sourceFile));
})