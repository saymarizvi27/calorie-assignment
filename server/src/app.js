const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const api = require('./routes/api.js');
var multer = require('multer');
var upload = multer();


app.use(cors());
app.options('*', cors());
app.use(express.urlencoded({ extended: true })); 

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.json());
app.use(express.static(path.join(__dirname,'..','public')));
app.use('/v1', api);


module.exports = app;