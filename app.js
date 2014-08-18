var express    = require('express'),
	app        = express();
	
// Configuration File.
var opt = require(__dirname + "/config")(app);
var _   = require('lodash');

// Master Routes.
require(__dirname +'/router')(app,express);

// Static Files
app.use(express.static(__dirname + '/public'));

app.listen(opt.port);

console.log('Server running on port ' + opt.port);
