import express, { Request, Response } from 'express';  // expressと型をインポート
const app = express();

// JSON形式でレスポンスを返す
app.get('/api', (req: Request, res: Response) => {  // reqとresに型を付ける
  res.json({ message: 'Hello from the server!' });
});

// サーバーを3000ポートで開始
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});