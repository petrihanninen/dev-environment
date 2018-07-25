#!/bin/bash

# Install and reload .profile
cp system/.profile ~/
. ~/.profile

# Install VSCode settings
cp -r vscode/extensions ~/.vscode-insiders/
cp vscode/keybindings.json ~/Library/Application\ Support/Code\ -\ Insiders/User/
cp vscode/settings.json ~/Library/Application\ Support/Code\ -\ Insiders/User/

# Git
cp git/.gitignore_global ~/
cp git/.gitconfig ~/
