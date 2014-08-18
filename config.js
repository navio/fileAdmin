var bodyParser = require('body-parser');
var methodOverride  = require('method-override');
	
module.exports = function(app){
	
	var env = process.env.NODE_ENV || 'development';
	var port = process.env.PORT || 8080
	
	
	if ('development' == env) {
	   	app.use(require('morgan')('dev'));   	
	}
	
	
	app.use(methodOverride()); 
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	
	
	return { port: port, enviroment: env };
	
	
}