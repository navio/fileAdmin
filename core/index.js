module.exports = function(app,express){
	
		   require("./router")(app,express);
	return require("./config")(app);
}