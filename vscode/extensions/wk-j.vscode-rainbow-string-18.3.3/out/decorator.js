"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const rainbow_1 = require("./rainbow");
let colors = Array.from(rainbow_1.rainborColors);
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function decorate() {
    let editor = vscode.window.activeTextEditor;
    let text = editor.document.getText();
    let rainbows = colors.map(x => vscode.window.createTextEditorDecorationType({ color: x }));
    let regex = /(?:"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)')/g;
    let decorators = colors.map(color => []);
    let match;
    let offset = getRandomInt(0, colors.length);
    while ((match = regex.exec(text))) {
        let chars = [...(match[1] || match[2])];
        offset--;
        if (chars.length > 0) {
            chars.forEach((_, i) => {
                var matchIndex = match.index + 1;
                let rainbowIndex = Math.abs((i + offset) % colors.length);
                let startIndex = matchIndex + i;
                let endIndex = matchIndex + i + 1;
                let start = editor.document.positionAt(startIndex);
                let end = editor.document.positionAt(endIndex);
                decorators[rainbowIndex].push(new vscode.Range(start, end));
            });
        }
    }
    decorators.forEach((d, index) => {
        editor.setDecorations(rainbows[index], d);
    });
}
exports.decorate = decorate;
//# sourceMappingURL=decorator.js.map