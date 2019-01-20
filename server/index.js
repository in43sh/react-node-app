const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const server = app.listen( port, () => console.log(`Listening on port: ${port}`) );