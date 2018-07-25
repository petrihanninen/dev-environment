#!/bin/bash

# Bash .profile
cp ~/.profile system/

# VSCode
rm -rf vscode/extensions && cp -r ~/.vscode-insiders/extensions vscode/
cp ~/Library/Application\ Support/Code\ -\ Insiders/User/keybindings.json vscode/
cp ~/Library/Application\ Support/Code\ -\ Insiders/User/settings.json vscode/

# Git
cp ~/.gitignore_global git/
cp ~/.gitconfig git/
