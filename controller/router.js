

var file = require('../models/file');

exports.showIndex = function(req,res){

   file.getAllAblum(function(err,albums){

    console.log('=====' , albums); 
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
  res.send('相册名称：' + req.params.albumName);
}