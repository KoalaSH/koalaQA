// SERVER.JS

// modules
var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
var methodOverride=require('method-override');
var mongoose	= require('mongoose');


/* CONFIGURATION */
// config files
var database = require('./config/db');

// port setup
var port = process.env.PORT || 8080;

// connect to mongodb Database
mongoose.connect(database.url);

// get all data of the body (POST) parameters
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({extended : true}));
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

/* 	Global Require
	Used to require modulers in folders from the root of the project.
	Mkes it easier to call modules in different folders, and easier to comprehend too.
*/
global.rootRequire = function(modulePath) {
	return require(__dirname + '/' + modulePath);
};

/* ROUTES */
require('./app/routes')(app);

/* START APP */
// listen the app in localhost:8080
app.listen(port);

// log the port in console
console.log('Serving app on port: ', port);

// expose app
exports = module.exports = app;
