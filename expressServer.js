import express from 'express';
// const express = require('express'); // when type: "commonjs" in package.json
const app = express();
// const PORT = 9898;
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send("<h1>Hello World! This is New Express Server. After the 3rd Image build. New Docker. Are the changes syncing</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
