const express = require('express');
require('dotenv').config();
const app = express();
const configViewEngine = require('./config/ViewEngine');
const webRoute = require("./routers/web");
const apiRoute = require("./routers/api");

const port = process.env.PORT;
const db = require('./config/db');
db.connect();
configViewEngine(app);
app.use("/",webRoute);
app.use("/api",apiRoute);
app.listen(port, () => {
  console.log(`Example app listening 123 on port ${port}`)
})