const handlebars = require('express-handlebars').create({
    helpers: {
        sum: (a,b) => a + b,
    }
});
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser')
const configViewEngine = (app) => {
    app.use(morgan('combined'))
    app.use(cookieParser())
    app.engine('handlebars', handlebars.engine);
    app.set('view engine', 'handlebars');
    app.set('views',path.join("./src",'resource/view'));
    app.use(express.json());
    app.use(express.raw());
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.static(path.join('./src', 'public')));
    app.use(methodOverride('_method'));
}

module.exports = configViewEngine;