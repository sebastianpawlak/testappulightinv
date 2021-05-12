const express = require('express');
const server = express();
const PORT = 3000;

server.get('/', (req, res) => {
  console.log(process.env);
  res.send('Hello Express!');
});

server.get('/envs', (req, res) => {
  console.log(process.env);
  res.send('Envs displayed in logs!');
});

server.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);
});