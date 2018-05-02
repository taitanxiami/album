

var express = require('express');
var router = require('./controller/router');
var app =  express();

app.set("view engine", "ejs");

//路由中间件，静态文件
app.use(express.static('./public'));
app.use(express.static('./uploads'));
//路由
app.get('/',router.showIndex);
app.get('/up', router.showUp);
app.post('/up',router.doPost);
app.get('/:albumName',router.showAlbum);

app.use(function(req,res){
  res.render('err');
})
app.listen(8081);


