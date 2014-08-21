var express		= require('express');
	app			= express();
	opt			= require('./core')(app,express);

app.listen(opt.port);
console.log('Server running on port ' + opt.port);
