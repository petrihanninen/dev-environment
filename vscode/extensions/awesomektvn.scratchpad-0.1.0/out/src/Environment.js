"use strict";
const path = require('path');
class Environment {
    constructor(context) {
        this.isInsiders = null;
        this.homeDir = null;
        this.ExtensionFolder = null;
        this.PATH = null;
        this.FILE_SETTING = null;
        this.FILE_LAUNCH = null;
        this.FILE_KEYBINDING = null;
        this.FILE_LOCALE = null;
        this.FILE_SETTING_NAME = "settings.json";
        this.FILE_LAUNCH_NAME = "launch.json";
        this.FILE_KEYBINDING_NAME = "keybindings.json";
        this.FILE_EXTENSION_NAME = "extensions.json";
        this.FILE_LOCALE_NAME = "locale.json";
        this.FILE_EXTENSION = null;
        this.FOLDER_SNIPPETS = null;
        this.APP_SETTINGS = null;
        this.context = context;
        this.isInsiders = /insiders/.test(context.asAbsolutePath(""));
        this.homeDir = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
        this.ExtensionFolder = path.join(this.homeDir, this.isInsiders ? '.vscode-insiders' : '.vscode', 'extensions');
        this.PATH = process.env.APPDATA;
        if (!this.PATH) {
            if (process.platform == 'darwin')
                this.PATH = process.env.HOME + '/Library/Application Support';
            else if (process.platform == 'linux') {
                var os = require("os");
                this.PATH = os.homedir() + '/.config';
            }
            else
                this.PATH = '/var/local';
        }
        var codePath = this.isInsiders ? '/Code - Insiders' : '/Code';
        this.PATH = this.PATH + codePath;
        this.FILE_EXTENSION = this.PATH.concat("/User/", this.FILE_EXTENSION_NAME);
        this.FILE_SETTING = this.PATH.concat("/User/", this.FILE_SETTING_NAME);
        this.FILE_LAUNCH = this.PATH.concat("/User/", this.FILE_LAUNCH_NAME);
        this.FILE_KEYBINDING = this.PATH.concat("/User/", this.FILE_KEYBINDING_NAME);
        this.FILE_LOCALE = this.PATH.concat("/User/", this.FILE_LOCALE_NAME);
        this.FOLDER_SNIPPETS = this.PATH.concat("/User/snippets/");
        this.APP_SETTINGS = this.PATH.concat("/User/syncSettings.json");
    }
}
exports.Environment = Environment;
//# sourceMappingURL=Environment.js.map