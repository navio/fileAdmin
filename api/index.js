module.exports = function(app){

  // controllers =   require('./controllers');
  //                 require('./routes');
  var router = require('express').Router();

  router.get('/', function(req, res) {
    res.send('API is the ON');
  });


  // File
  router.get('/file/:id/download',devReturn); //get file with ID

  router.get('/file/:id/status',devReturn); //get file STATUS with ID

  router.put('/file/:id/version',devReturn); // update status

  router.put('/file/:id/data',devReturn); // update data

  router.post('/file/:id/:name',devReturn); // rename file with ID

  router.delete('/file/:id',devReturn); // delete file with ID

  // Folder
  router.get('/p/:path/folder',devReturn ); //get files ID's in folder

  router.post('/p/:path/folder/:name',devReturn); //create Folder

  router.delete('/p/:path/folder',devReturn); //delete folder - And content.


  // Hybirds

  router.put('/p/:path/file/:name',devReturn); //put FILE in folder

  app.use("/api", router);

};

function devReturn(req,res){
  res.send('Response');
}
