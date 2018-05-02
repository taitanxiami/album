

var file = require('../models/file');
var formidable = require('formidable');

exports.showIndex = function(req,res){
  console.log('showIndex');

   file.getAllAlbums(function(err,albums){
    if(err) {
      res.send(err);
    }
    res.render('index', {
      albums: albums,
    });
  
  });
}

//访问相册
exports.showAlbum = function(req,res){
  console.log('showAlbum');

  // res.send('相册名称：' + req.params.albumName);
  var albumName = req.params.albumName;
  console.log(albumName);
  file.getAllImagesByAlnumName(albumName,function(error,images){

    if(error){
      res.send(error);
      return;
    }
    res.render('album',{
      images:images,
      albumName:albumName
    });    
  });
}

exports.showUp = function(req, res) {

  file.getAllAlbums(function(err,albums){
    if(err) {
      res.send(err);
    }
    res.render('up', {
      albums: albums,
    });
  
  });
}

exports.doPost = function(req,res) {

  console.log('doPost');
  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
    console.log(err);
    console.log(files);
    console.log(fields);
    res.send("成功");
  });
}