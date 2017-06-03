const express = require('express');
const app =express();


app.get('/haha',function(req,res){

res.send('我是页面哈哈')

})
app.post('/upload',function(req ,res){

  res.send('upload')
})

app.delete('/delete',function(req ,res){
res.send('delete')
})

app.listen(80);