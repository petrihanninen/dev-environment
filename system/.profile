# Set PATH
export PATH="/Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/bin:$PATH"


# Open Visual Studio Code Insiders
alias code='code-insiders '
function c() {
  if [ $1 ]; then
    code $1
  else
    code .
  fi
}

# Enable aliases for sudo
# See http://www.shellperson.net/using-sudo-with-an-alias/
alias sudo='sudo '

# List files with human-readable file sizes
alias ll='ls -lh '
alias la='ls -lhA '

# Find
function f() {
  find . -type f -exec grep $1 '{}' \; -print
}
function fL() {
  find -L . -type f -exec grep $1 '{}' \; -print
}

# Manage this file
alias edit_profile='open -e ~/.profile'
alias reload_profile='. ~/.profile && cp ~/.profile ~/Dropbox\ \(Aller\)/webdev/dev-environment/system'

# Git
alias ga="git add"
alias gaa="git add ."
alias gc="git commit"
alias gcm="git commit -m"
alias gca="git commit --amend"
alias gp="git push"
alias gpf="git push -f"
