var express    = require('express');
	app        = express();
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var port = process.env.PORT || 8080;

require(__dirname +'/router')(app);

app.listen(port);
console.log('Server running on port ' + port);