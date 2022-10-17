// Import express package and notes.js file
const express = require('express');
const notes = require('./notes.js');
const app = express();

app.use('/notes', notes);

//export app module
module.exports = app;