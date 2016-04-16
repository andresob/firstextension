// server.js

// BASE SETUP
// ==============================================
var express  = require('express');
var mongoose = require('mongoose');
var validator = require('validator');


// INITIALIZE
// ==============================================
var app  = express();
var port = process.env.PORT || 3000;


// ROUTES
// ==============================================

// get an instance of router
var router = express.Router();

// route middleware that will happen on every request
router.use(function(req, res, next) {
    // log each request to the console
    console.log(req.method, req.url);
    // continue doing what we were doing and go to the route
    next();
});

// home page route (http://localhost:3000)
router.get('/history', function(req, res) {
    res.send('history page!');
});

// about page route (http://localhost:3000/check-info)
router.get('/check-info', function(req, res) {
		var suspect = 'www.facebook.com';
		console.log(validator.isURL(suspect));
    // res.send('im the about page!');
		// var query = req.query.q;
});


// apply the routes to our application
app.use('/simple-api/v1/', router);


// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
