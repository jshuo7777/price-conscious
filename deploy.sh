#!/usr/bin/env sh

# 當發生錯誤時終止腳本運行
set -e

# 構建
npm run build

# 進入生成的輸出產物目錄
cd dist

# 如果是發佈到自定義域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果發佈到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是發佈到 https://<USERNAME>.github.io/<REPO>
# 命令如下:
git push -f git@github.com:jshuo7777/price_conscious.git master:gh-pages

cd -
