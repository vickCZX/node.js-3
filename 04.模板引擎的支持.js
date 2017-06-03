const express =require('express');

const app = express();
const nunjucks =require('nunjucks');

//模板目录
nunjucks.configure('views',{
  express:app
})

app.get('/',function(req,res){
 res.render('index.njk',{'user':'haha'})
});
app.listen(80);