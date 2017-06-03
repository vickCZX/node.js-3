const express =require('express');
const app =express();

app.get('/',function(req,res){

console.log(req.query);

res.send();
})
app.listen(80);