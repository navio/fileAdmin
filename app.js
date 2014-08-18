var express    = require('express');
	app        = express();
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
<<<<<<< HEAD


=======
>>>>>>> b051064a076fa9ea3e7dd873e5a9b34a186fd1b6

var port = process.env.PORT || 8080;


require(__dirname +'/router')(app,express);

app.listen(port);
console.log('Server running on port ' + port);
