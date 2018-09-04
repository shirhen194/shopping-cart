var express = require('express');
var app = express();
app.listen(8000);
app.use(express.static('public'));
app.use(express.static('node_modules'));
const api = require('./Api.js');
app.use('/', api);

