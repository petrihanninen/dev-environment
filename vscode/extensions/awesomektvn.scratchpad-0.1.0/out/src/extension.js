'use strict';
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const os_1 = require('os');
const fileName = 'scratchpad.txt';
let fullPath = '';
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.openScratchpad', () => {
        fullPath = path.join(context.extensionPath, fileName);
        if (!fs.existsSync(fullPath)) {
            fs.writeFileSync(fullPath, '');
        }
        vscode.workspace.openTextDocument(fullPath).then((doc) => {
            vscode.window.showTextDocument(doc).then(editor => {
                const length = doc.getText().length;
                const pos = editor.document.positionAt(length);
                editor.selection = new vscode.Selection(pos, pos);
                editor.edit(e => {
                    e.insert(pos, newLine(length === 0));
                });
            });
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
function newLine(firstLine = false) {
    const now = new Date();
    return (firstLine ? '' : os_1.EOL)
        + '----------'
        + now.toJSON().slice(0, 10) + ' '
        + now.toLocaleTimeString('fullwise', { hour12: false })
        + '----------' + os_1.EOL;
}
//# sourceMappingURL=extension.js.map