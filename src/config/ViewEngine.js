const handlebars = require('express-handlebars').create();
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const configViewEngine = (app) => {
    app.use(morgan('combined'))
    app.engine('handlebars', handlebars.engine);
    app.set('view engine', 'handlebars');
    app.set('views',path.join("./src",'resource/view'));
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;