# Node.jsの公式イメージを使用
FROM node:20

# 作業ディレクトリを指定
WORKDIR /server

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
#（ここでエラー起きるからバックエンドが必要になるまで一旦放置）
#RUN npm install

# アプリのソースコードをコピー
COPY . .

# ポート3001でAPIサーバーを立ち上げる
EXPOSE 3000

# TypeScript サーバーを起動
# CMD ["npx", "ts-node", "src/server.ts"]
# TypeScriptをコンパイル
#RUN npx tsc
#CMD ["node", "dist/server.js"]