const express =require('express');
const app =express();

const xuesheng = require('./xuesheng.js');
const laoshi = require('./laoshi.js');
const news = require('./news.js');

app.use('/xuesheng',xuesheng);

app.use('/laoshi',laoshi);



app.use('/news',news)
app.listen(80);