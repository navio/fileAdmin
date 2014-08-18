module.exports = function(app,express){

	var router = express.Router();
	
	router.get('/', function(req, res) {
		res.send('im the about page!');	
	});
	
	app.use('/', router);

};