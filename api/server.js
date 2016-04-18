// server.js

// BASE SETUP
// ==============================================
var express  = require('express');
var mongoose = require('mongoose');
var configDB = require('./config/database.js');


// INITIALIZE
// ==============================================
var app  = express();
var port = process.env.PORT || 3000;

// connect to database
mongoose.connect(configDB.url);


// ROUTES
// ==============================================

// get an instance of router
var router = express.Router();
var main = require('./controllers/mainCtrl');

// route middleware that will happen on every request
router.use(function(req, res, next) {
    // log each request to the console
    console.log(req.method, req.url);
    // continue doing what we were doing and go to the route
    next();
});

// home page route (http://localhost:3000)
router.get('/history', main.list);

// about page route (http://localhost:3000/check-info)
router.get('/check-info', main.check);


// apply the routes to our application
app.use('/simple-api/v1/', router);


// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
