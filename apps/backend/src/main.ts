import { prismaClient } from '@template-nextjs-expressjs-minimal/db';
import * as express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

app.post('/create', async (req, res) => {
  const account = await prismaClient.account.create({
    data: {
      id: req.body.id,
      username: req.body.username,
      email: req.body.email,
    },
  });
  res.status(201).send(account);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
