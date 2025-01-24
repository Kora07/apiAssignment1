const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

require('dotenv').config();
const config = {
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvian: process.env.IS_KALVIAN === 'true',
};

console.log(config)

app.get('/', (request, response) => {
  response.send(config);
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});


module.exports = config;
