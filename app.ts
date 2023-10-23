import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const cokoliv = process.env.COKOLIV;


app.get('/', (req: Request, res: Response) => {
  res.send(`Express + TypeScript Server bla bla ${cokoliv}`);
});

app.get('/menu', (req: Request, res: Response) => {
  const menu = {
    name: "Svíčková",
    ingredience: [ "Smetana", "maso" ]
  }

  res.send(JSON.stringify(menu));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});