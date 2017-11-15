
var fs = require('fs');
var path = require('path');

exports.getAllAblum = function(callback){

  fs.readdir('./uploads',function(error,files){
    
    if(error) {
      console.log(error);      
      var err = "找不到uploads文件夹";
      callback(err, null);
    }
    var allAlnums= [];
    
    (function interator(i) {     
      //边界  
      if(i == files.length){
        callback(null,allAlnums);
        return;
      }
      var filePath = path.resolve(__dirname,'../uploads/' , files[i]);
      fs.stat(filePath, function(error,stats){  
        if(error) {
          console.log(error);
          return;
        };
        if(stats.isDirectory()) {
          allAlnums.push(files[i]);
        }
        interator(i+1);
      });       
    })(0);
  });
};