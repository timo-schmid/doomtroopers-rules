#!/bin/bash -e

yarn build
git add .
git commit -a
git push
git subtree push --prefix dist origin gh-pages

