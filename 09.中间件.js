const express =require('express');
const app = express();

let num = 0;

app.use(function(req,res,next){
num +=1;
req.haha= "haha";
console.log('123');
next();

})

app.get('/',function(req,res){
console.log(req.haha);
res.send('首页')

})
app.listen(80);