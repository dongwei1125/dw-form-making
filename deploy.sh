#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd lib

git init
git add -A
git commit -m 'feat: deploy pages'

# 推送 page 分支
git push -f git@github.com:dongwei1125/dw-form-making.git HEAD:page

cd - && rm -rf lib