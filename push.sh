#!/bin/bash -e

yarn build
git add dist
git commit
git push
git subtree push --prefix dist origin gh-pages

