# Node.jsの公式イメージをベースにする
FROM node:20

# 作業ディレクトリを指定
WORKDIR /app

# package.json と package-lock.json をコンテナにコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリのコードをコンテナにコピー
COPY . .

# 5173ポートを公開
EXPOSE 5173

# 開発用のホットリロードを有効化（Vite用）
CMD ["npm", "run", "dev", "--", "--host"]