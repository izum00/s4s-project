# ベースイメージとして Node.js を使用
FROM node:20.18.1

# 作業ディレクトリを設定
WORKDIR /app

# ホストのファイルをコンテナにコピー
COPY . .
#RUN npm install -g pnpm
# translations ディレクトリを作成し、権限を設定
RUN mkdir -p /app/translations && chmod -R 777 /app/translations
RUN chmod -R 777 /app
RUN chmod +x static-upload.sh
RUN mkdir -p /app/translations/messages && chmod -R 777 /app/translations
RUN apt-get update && apt-get install -y python3 python3-pip
RUN pip3 install --upgrade huggingface_hub --break-system-packages
# 依存関係をインストール（競合を無視）
#RUN PNPM_SKIP_BUILDS_APPROVAL=true pnpm install --prefer-offline --strict-peer-dependencies=false
RUN npm config set registry https://registry.npmjs.org/

RUN npm install --prefer-offline --no-audit --legacy-peer-deps
RUN npm install --save-dev @svgr/webpack@5

# OpenSSL の互換オプションを有効化
#ENV NODE_OPTIONS="--openssl-legacy-provider"
RUN sed -i 's/\$PORT/3000/g' package.json

#RUN PNPM_SKIP_BUILDS_APPROVAL=true pnpm install scratch-vm@git+https://huggingface.co/datasets/soiz1/s4s-vm
RUN npm install scratch-vm@git+https://huggingface.co/datasets/soiz1/s4s-vm
# コンテナの起動時にサーバーを実行
ENV BUILD_MODE=dist
# translations/messages ディレクトリを作成し、権限を設定
RUN mkdir -p /app/translations/messages && chmod -R 777 /app/translations
RUN chmod -R 777 /app
RUN export NODE_OPTIONS="--max-old-space-size=12288"
ENV NODE_OPTIONS="--max-old-space-size=12288"

RUN mkdir -p /app/translations/messages \
    && chmod -R 777 /app/translations/messages \
    && chmod -R 777 /app
    
RUN NODE_OPTIONS=--openssl-legacy-provider npm run build 

CMD BUILD_MODE=dist npm start

# コンテナがリッスンするポート
EXPOSE 3000