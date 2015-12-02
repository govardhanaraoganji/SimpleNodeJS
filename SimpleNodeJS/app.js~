// BASE SETUP
// ==============================================

var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');
var http = require('http');
var i18n = require("i18n");
var url = require("url");
var mongodb = require('mongodb');
var assert = require('assert');
var socket = require('socket.io');


var app     = express();
var port    =   process.env.PORT || 3000;
var io = socket.listen(server);
var routes = require('./routes');
var datas = require('./routes/data.js');

// Configure I18N
i18n.configure({
    // setup some locales - other locales default to en silently
    locales: ['en', 'de'],

    // you may alter a site wide default locale
    defaultLocale: 'en',

    // sets a custom cookie name to parse locale settings from  - defaults to NULL
    cookie: 'i18n_cookie',

    // where to store json files - defaults to './locales' relative to modules directory
    directory: './locales',

    // setting extension of json files - defaults to '.json' (you might want to set this to '.js' according to webtranslateit)
    //extension: '.js',

    // setting prefix of json files name - default to none '' (in case you use different locale files naming scheme (webapp-en.json), rather then just en.json)
    prefix: 'webapp-',

    // enable object notation
    objectNotation: false ,

    // setting of log level DEBUG - default to require('debug')('i18n:debug')
    logDebugFn: function (msg) {
        console.log('debug', msg);
    },

    // setting of log level WARN - default to require('debug')('i18n:warn')
    logWarnFn: function (msg) {
        console.log('warn', msg);
    },

    // setting of log level ERROR - default to require('debug')('i18n:error')
    logErrorFn: function (msg) {
        console.log('error', msg);
    }
});

// configure stuff here
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(methodOverride());
app.use(session({
        resave: true,
        saveUninitialized: true,
        secret: 'uwotm8'
}));
app.use(multer({dest:'./uploads/'}).fields('photo'));
//app.use(i18n.init);


var env = app.settings.env;
// Configuration
if(env == 'production'){ 
	app.use(errorHandler());
}else{
	app.use(errorHandler({
        	dumpExceptions: true,
        	showStack: true
    	}));
}


// ROUTES
// ==============================================

// root page
app.get('/', routes.index);
app.get('/addStudent', datas.addStudent);
app.post('/addQuestion', datas.addQuestion);

// we'll create our routes here


// START THE SERVER
// ==============================================
var server = app.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});


