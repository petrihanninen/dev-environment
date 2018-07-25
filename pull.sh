#!/bin/bash

# Bash .profile
cp ~/.profile system/

# VSCode
cp ~/Library/Application\ Support/Code\ -\ Insiders/User/keybindings.json vscode/
cp ~/Library/Application\ Support/Code\ -\ Insiders/User/settings.json vscode/

# Git
cp ~/.gitignore_global git/
cp ~/.gitconfig git/
