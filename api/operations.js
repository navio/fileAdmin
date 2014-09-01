mkdirp  =  require('mkdirp');
fs      =  require('fs');
fes     =  require('extfs');

module.exports = function(){
    return { folder:folderOperations, file:fileOperations };
}

var folderOperations = {

  create: function(path,name){

      mkdirp(path+"/"+name, function (err) {

          if (err) return false;

          return true;

      });
  },

  rename: function(path,oldname,newname){


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

  erase: function(path,force){

      fes.isEmtpy(path,function(){

        fes.removeSync(path, function (err) {
            if(err) return false;
            return true;
        });

      });

  },

  getDirs: function(path){

    fes.getDirs(path, function (err, dirs) {

      if (err) return {status:"error",data:[]};

      return {status:"read",data:dirs};

    });

  },

  getContents: function(path){
    try{

      return { status:"read",data:fs.readdirSync(path) };

    }catch(err){

      return {status:"error",data:[]}

    }

  }

};

var fileOperations = {

  save: function(path,data){
    try{
      fs.writeFile(path, data, function (err) {
        if (err) return false;
        return true;
      });
    }catch(err){ return false; }

  },

  read: function(path){

    fs.readFile(path, 'utf8', function (err,data) {
      if(err) return false;
      return data;
    });


  },

  erase: function(path){
    if(fs.exists(path))
      return fs.unlink(path,function (err) {
        if (err) return false;
        return true;
    });
  },

  rename: function(path,oldname,newname){

    var pold = path +'/'+oldname;
    var pnew = path +'/'+newname;

    if(fs.exists(pold)){
      fs.rename(pold, pnew, function(err) {
          if(err) return false;
          return true;
      });
    }
  },

};
