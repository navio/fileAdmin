module.exports = function(app,route,location){
	
	/*
	
	@module TCP MultiPart Transfer.
	@param app {Object} Express App 
	@param route {String}
	@param location {String}
	 
	Activate extension from {String} name, "/tcpTransfer"
    Receives a multipart file from a file.  	
    || method="post", enctype="multipart/form-data ||	
	
	*/
	
	if(route === 'undefined') route = '/tcpTransfer';
	if(location === 'undefined') location = '../uploads/tcpTransfer';
	
	var router =	 require('express').Router();
	var multer = require('multer');
	
	app.use(multer({dest:location}));
	
	router.get('/', function(req, res) {
	  res.send('upload a file!');
	});
	
	router.post('/', function(req, res) {
	  console.dir(req.files);
	});
	
	app.use(route, router);
	
}

/*

form(role="form", action="/", method="post", enctype="multipart/form-data")
	div(class="form-group")
	  label(for="tcpTransfer") Upload A File        
	  input(type="file", name="tcpTransfer", id="tcpTransfer")

*/