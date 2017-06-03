const express =require('express');
const app = express();

app.get('/:name',function(req,res){
  res.send(`$(req.params.name)`)});

app.get('/student/1234',function(req,res){
res.send('管理员页面')
})

app.get('/student/:id',function(req,res){

  res.send(`学生的ID是:${req.params.id}`)
})
app.listen(80)