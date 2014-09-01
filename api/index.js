module.exports = function(app){

  // controllers =   require('./controllers');
  //                 require('./routes');
  var router = require('express').Router();

  router.get('/', function(req, res) {
    res.send('API is the ON');
  });


  // File
  router.get('/f/:id/download',devReturn); //get file with ID

  router.get('/f/:id/status',devReturn); //get file STATUS with ID

  router.put('/f/:id/version',devReturn); // update status

  router.put('/f/:id/data',devReturn); // update data

  router.post('/f/:id/:name',devReturn); // rename file with ID

  router.delete('/f/:id',devReturn); // delete file with ID

  // Folder
  router.get('/p/:path/folder',devReturn ); //get files ID's in folder

  router.post('/p/:path/folder/:name',devReturn); //create Folder

  router.delete('/p/:path/folder',devReturn); //delete folder - And content.


  // Hybirds

  router.put('/p/:path/file/:name',devReturn); //put FILE in folder

  app.use("/api", router);

};



var folderOperations = {

  createFolder: function(path,name){

      var mkdirp = require('mkdirp');
      mkdirp(path+"/"+name, function (err) {

          if (err) return false;

          return true;

      });
  },

  renameFolder: function(path,oldname,newname){
    var fs = require('fs');
    var fes = require('extfs');

    var pold = path+"/"+oldname;
    var pnew = path+"/"+newname;

      fes.isEmtpy(pold,function(){

        try{
          fs.rename(pold,pnew, function (err) {
            if (err) throw err;
            fs.stat(pnew, function (err, stats) {
              if (err) throw err;
              return true;
            });
          });
        }catch(err){ return false }

      });
  },

  eraseFolder: function(path,force){

      var fes = require('extfs');

      fes.isEmtpy(path,function(){

        fes.removeSync(path, function (err) {
            if(err) return false;
            return true;
        });

      });

  },

  getFolderDirs: function(path){
    var fes = require('extfs');

    fes.getDirs(path, function (err, dirs) {

      if (err) return {status:"error",data:[]};

      return {status:"read",data:dirs};

    });

  },

  getFolderContet: function(path){
    try{

      return { status:"read",data:fs.readdirSync(path) };

    }catch(err){

      return {status:"error",data:[]}

    }

  }

};

var fileOperations = {

  saveFile: function(path,data){

    fs = require('fs');
    try{
      fs.writeFile(path, data, function (err) {
        if (err) return false;
        return true;
      });
    }catch(err){ return false; }

  },

  readFile: function(path){

    fs = require('fs');
    fs.readFile(path, 'utf8', function (err,data) {
      if(err) return false;
      return data;
    });


  },

  eraseFile: function(path){},

  renameFile: function(path,oldname,newname){},

}



function devReturn(req,res){
  res.send('Response');
}
