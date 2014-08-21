module.exports = function(app,router){
	
	router.get('/', function(req, res) {
		res.send('i am the core app route.');	
	});
	
	app.use('/', router);

};