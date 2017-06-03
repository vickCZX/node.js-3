const express =require('express');
const app = express();

// app.get('/',function(req,res){
//   res.send('get');
// })
// app.post('/',function(req,res){
//   res.send('post')
// })

//用一个方法处理所有的请求
//精确的匹配
app.all('/a',function(req,res){
res.send('hahaha')

})

app.use('/a',function(req,res){
res.send('send')
})
app.listen(80)