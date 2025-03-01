# Node.jsの公式イメージを使用
FROM node:20

# 作業ディレクトリを指定
WORKDIR /server

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
#（ここでエラー起きるから自分で実行する）
#RUN npm install

# アプリのソースコードをコピー
COPY . .

# ポート3000を公開
EXPOSE 3000

# TypeScript サーバーを起動
# CMD ["npx", "ts-node", "src/server.ts"]

# TypeScriptをコンパイル
#RUN npx tsc
#CMD ["node", "dist/server.js"]