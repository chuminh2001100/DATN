const express = require('express');
require('dotenv').config();
const app = express();
const configViewEngine = require('./config/ViewEngine');
const webRoute = require("./routers/web");

const port = process.env.PORT;
const db = require('./config/db');
// db.connect();
configViewEngine(app);
app.use("/",webRoute);

app.listen(port, () => {
  console.log(`Example app listening 123 on port ${port}`)
})