const express = require('express');

const app = express();
const path = require('path');
const api = require('./routes/api.js');

app.use(express.json());
app.use(express.static(path.join(__dirname,'..','public')));
app.use('/v1', api);


module.exports = app;