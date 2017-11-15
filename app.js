

var express = require('express');
var router = require('./controller/router');
var app =  express();

app.set('view engine', 'ejs');
//路由中间件，静态文件
app.use(express.static('./public'));

//路由
app.get('/',router.showIndex);
app.get('/:albumName',router.showAlbum);

app.listen(8081);


