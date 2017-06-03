const express = require('express');
const app =express();

// app.use(express.static('www'));

app.use('/public',express.static('www'));

app.use('/www',express.static('www'))

app.listen(80)