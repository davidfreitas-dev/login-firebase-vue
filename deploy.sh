#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:davidfreitas-dev/login-firebase-vue.git master:gh-pages

cd -