#!/bin/bash

# 使用するディレクトリの判定
if [ -d "build" ]; then
    SRC_DIR="build"
elif [ -d "dist" ]; then
    SRC_DIR="dist"
else
    echo "Error: build も dist も存在しません"
    exit 0
fi

echo "アップロード元ディレクトリ: $SRC_DIR"


# Hugging Face Hub CLI がなければインストール
if ! command -v huggingface-cli &> /dev/null; then
    pip install --upgrade huggingface_hub
fi

# 一時ディレクトリ作成
TMP_DIR=$(mktemp -d)
cp -r "$SRC_DIR"/* "$TMP_DIR"

# Hugging Face Space に push
huggingface-cli upload s-4-s/editor "$TMP_DIR" --repo-type=space --token "$s4stoken01" --commit-message "Upload static files"

# 後片付け
rm -rf "$TMP_DIR"

echo "アップロード完了"