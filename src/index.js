const express = require('express');
require('dotenv').config();
const app = express();
const configViewEngine = require('./config/ViewEngine');
const webRoute = require("./routers/web");
const apiRoute = require("./routers/api");
const beautyRoute = require("./routers/createModes");
const authRoute = require("./routers/authLogin");
const port = process.env.PORT;
const db = require('./config/db');
db.connect();
configViewEngine(app);
app.use("/",webRoute);
app.use("/api",apiRoute);
app.use('/beauty',beautyRoute);
app.use('/auth',authRoute);
app.listen(port, () => {
  console.log(`Example app listening 123 on port ${port}`)
})