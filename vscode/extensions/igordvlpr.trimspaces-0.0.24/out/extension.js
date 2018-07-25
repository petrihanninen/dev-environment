'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const timers_1 = require("timers");
let status;
function showSavings(savings) {
    if (savings === 0)
        status.text = 'No spaces to remove.';
    else
        status.text = `${savings} spaces removed.`;
    status.show();
    const timer = timers_1.setTimeout(() => {
        status.hide();
        timers_1.clearTimeout(timer);
    }, 2500);
}
function setupStatusBar(context) {
    status = vscode_1.window.createStatusBarItem(vscode_1.StatusBarAlignment.Right, 100);
    context.subscriptions.push(status);
}
function activate(context) {
    let cmdTrim = vscode_1.commands.registerCommand('extension.trimSpaces', () => {
        const editor = vscode_1.window.activeTextEditor;
        if (!editor) {
            vscode_1.window.showInformationMessage('No active editors.');
            return;
        }
        const document = editor.document;
        const text = document.getText();
        const textLength = text.length;
        setupStatusBar(context);
        if (textLength === 0) {
            showSavings(0);
            return;
        }
        editor.edit((builder) => {
            const lastLine = document.lineAt(document.lineCount - 1);
            const start = new vscode_1.Position(0, 0);
            const end = new vscode_1.Position(document.lineCount - 1, lastLine.text.length);
            const regSpaces = new RegExp('[^\\S\\x0a\\x0d]+$', 'gim');
            const lineCount = document.lineCount;
            let newText = '';
            let difference = 0;
            newText += text.replace(regSpaces, '');
            difference = textLength - newText.length;
            builder.replace(new vscode_1.Range(start, end), newText);
            showSavings(difference);
        });
    });
    context.subscriptions.push(cmdTrim);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map