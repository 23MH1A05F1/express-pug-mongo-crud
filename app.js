const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const studentRoutes = require('./routes/student.routes');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', studentRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/studentDB');


module.exports = app;
