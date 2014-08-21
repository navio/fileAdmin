module.exports = function(app){
	
	var server 	= require('http').Server(app);
	var io 		= require('socket.io')(server)
	
	server.listen(9000);
	
	
	io.on('connection', function (socket) {
	  socket.emit('news', { hello: 'world' });
	  socket.on('my other event', function (data) {
		console.log(data);
	  });
	});
	
}