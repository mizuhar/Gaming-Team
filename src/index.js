const express = require('express');
const router = require("express").Router();

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello, world!</h1>');
  })

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}... `);
  });