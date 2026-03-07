#!/bin/bash
echo "starting..."

# 必須: 環境変数 s4stoken01 が設定されていることを確認
if [ -z "$s4stoken01" ]; then
  echo "Error: 環境変数 s4stoken01 が設定されていません。"
  exit 1
fi
SRC_DIR="$(cd "$(dirname "$0")" && pwd)/dist"
# 作業用一時ディレクトリ作成
WORK_DIR=$(mktemp -d)
echo "作業ディレクトリ: $WORK_DIR"

# Git 認証つきURL
REPO_URL="https://user:$s4stoken01@huggingface.co/spaces/s-4-s/editor"

# リモートから clone
git clone "$REPO_URL" "$WORK_DIR"
cd "$WORK_DIR" || exit 1

# Git LFS を初期化
git lfs install

# LFS対象ファイルを指定
git lfs track "js/scratch-gui.js"
git lfs track "js/scratch-gui.js.map"
git lfs track "dist/js/scratch-gui.js"
git lfs track "dist/js/scratch-gui.js.map"
git lfs track "*.ttf"
git lfs track "*.otf"
git lfs track "*.png"
git lfs track "*.svg"

git add .gitattributes

# 既存内容を削除（.git を除く）
find . -mindepth 1 -maxdepth 1 ! -name ".git" -exec rm -rf {} +


# dist フォルダの中身をすべてコピー
rsync -av "$SRC_DIR/" "$WORK_DIR/"

# LFS対象ファイルを rm --cached → add し直す
git rm --cached js/scratch-gui.js js/scratch-gui.js.map 2>/dev/null || true
git add js/scratch-gui.js js/scratch-gui.js.map


# Dockerfile の CMD を置換
if [ -f Dockerfile ]; then
  sed -i.bak 's|CMD /bin/sh -c "./upload.sh && npm start"|CMD /bin/sh -c "npm start"|' Dockerfile
fi

# Git 設定と commit/push
git config user.name "soiz1"
git config user.email "izum.1414.go@gmail.com"
git add .
git commit -m "Auto deploy at $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit."
git push origin main --force

# 後始末
cd ..
rm -rf "$WORK_DIR"

echo "アップロード完了 ✅"