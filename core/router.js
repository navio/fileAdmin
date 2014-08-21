module.exports = function(app,express){

	var router = express.Router();
	
	router.get('/', function(req, res) {
		res.send('i am the core app route.');	
	});
	
	app.use('/', router);

};