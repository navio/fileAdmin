module.exports = function(app){
	var router =		require('express').Router(); // Local Initializsation
		   			require("./router")(app,router);
			return 	require("./config")(app);
}