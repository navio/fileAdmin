var app		= require('express')();
	opt		= require('./core')(app); //configuration.
	
  //webTransfers		= required('./webTransfer')(app);
  //webSockets		= required('./webSockets')(app);
  //SocketTransfer	= required('./socketTransfer')(app);	
	
app.listen(opt.port);

console.log('Server running on port ' + opt.port);