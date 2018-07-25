"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const decorator_1 = require("./decorator");
function activate(context) {
    console.log('Congratulations, your extension "vscode-rainbow-string" is now active!');
    let config = vscode.workspace.getConfiguration("rainbowString");
    vscode.workspace.onDidChangeConfiguration(() => {
        config = vscode.workspace.getConfiguration("rainbowString");
    });
    vscode.workspace.onDidSaveTextDocument(e => {
        var file = vscode.window.activeTextEditor.document.fileName;
        if (config.extensions.some(x => file.endsWith(x))) {
            decorator_1.decorate();
        }
    });
    vscode.workspace.onDidOpenTextDocument(e => {
        var file = vscode.window.activeTextEditor.document.fileName;
        if (config.extensions.some(x => file.endsWith(x))) {
            decorator_1.decorate();
        }
    });
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map