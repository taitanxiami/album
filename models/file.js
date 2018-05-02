
var fs = require('fs');
var path = require('path');

exports.getAllAlbums = function(callback) {

  fs.readdir("./uploads",function(err,files){
      if(err){
          callback("没有找到uploads文件",null);
      }
      // console.log(files);
      var allAlbums = [];
      (function iterator(i){
          if(i == files.length){
              //遍历结束
              callback(null,allAlbums);
              return;
          }
          fs.stat("./uploads/" + files[i],function(err,stats){
              if(err){
                  callback("找不到文件" + files[i] , null);
              }
              if(stats.isDirectory()){
                  allAlbums.push(files[i]);
              }
              iterator(i + 1);
          });
      })(0);
  });
}

  exports.getAllImagesByAlnumName = function(albumName, callback){
  fs.readdir('./uploads/' + albumName, function(error,files){
    
    // console.log(files);
    if(error) {
      console.log('readdir=======',error);
      callback(error, null);
    }
    
    var allImages = [];
    (function interator(i) {     
      //边界  
      if(i === files.length){
        callback(null,allImages);
        return;
      }
      var filePath = path.resolve(__dirname,'../uploads/' ,albumName , files[i]);
      fs.stat(filePath, function(error,stats){  
        if(error) {
          console.log(error);
          return;
        };
        if(stats.isFile()) {
          allImages.push(files[i]);
        }
        interator(i+1);
      });       
    })(0);
  });

};