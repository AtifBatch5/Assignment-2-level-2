import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('erm what the sigma');
});

export default app;
