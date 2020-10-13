#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Building now...
npm run build

cd dist

# if you are deploying to a custom domain
echo 'blackmartentrace.com' > CNAME

git init
git add -A
git commit -m 'Fixed link to pdf'

git push -f git@github.com:rzhou10/rzhou10.github.io.git master
cd -
