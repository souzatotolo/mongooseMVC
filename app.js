const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.API_PORT;
const apiName = process.env.API_NAME;
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const conn = require('./db/conn');
conn();

const routes = require('./routes/router');
app.use('/api', routes);

app.listen(port, () => {
  console.log(`${apiName} running on port: ${port}`);
});
