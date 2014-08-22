module.exports = function(app){
	
	var siofu = require("socketio-file-upload");
	app.use(siofu.router);
	
	io.on("connection", function(socket){
		var uploader = new siofu();
		uploader.dir = "/path/to/save/uploads";
		uploader.listen(socket);
	});
	
}

/*
module.exports = function(app,port){
	
	if(port === 'undefined') port = 9000;
	
	var server 	= require('http').Server(app);
	var io 		= require('socket.io')(server)
	
	server.listen(port);
	
	
	io.on('connection', function (socket) {
	  socket.emit('ready', { status: 'waiting for file' });
	  socket.on('file', function (data) {
		console.log(data);
	  });
	});
	
}
*/