# HELPER
DEV_ENV="/Users/petrihanninen/Dropbox (Aller)/webdev/dev-environment"

# NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

# Open Visual Studio Code Insiders
alias code='code-insiders '
function c() {
  if [ "$1" ]; then
    code $1
  else
    code .
  fi
}

# Move files to trash
alias del='trash'

# Alias for composer
alias composer='composer.phar '
alias com='composer '
alias comi='composer install'

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
function reload_profile() {
  if [[ "$1" ]]; then
    . ~/.profile
    cp ~/.profile "$DEV_ENV/system/"
    git -C "$DEV_ENV" add system/.profile
    git -C "$DEV_ENV" commit -m "$1"
    git -C "$DEV_ENV" push
  else
    echo "Give commit message as argument"
  fi
}

# Git
alias ga="git add"
alias gaa="git add ."
alias gc="git commit"
alias gcm="git commit -m"
alias gca="git commit -a"
alias gcam="git commit -am"
alias gc+="git commit --amend"
alias gd="git diff"
alias gp="git push"
alias gpf="git push -f"
alias gs="git status"

# Copy & Paste
alias copy='pbcopy < '
alias paste='pbpaste > '

# React
function cra() {
  npx create-react-app $1
  cd $1
  npm start
}
echo Hello World!