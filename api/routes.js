// module.exports = function(router) {
//
//   var main = require('./controllers/mainCtrl');
//
//
//   // route middleware that will happen on every request
//   router.use(function(req, res, next) {
//       // log each request to the console
//       console.log(req.method, req.url);
//       // continue doing what we were doing and go to the route
//       next();
//   });
//
//   router.get('/check-info', main.check);
//
//   // apply the routes to our application
//   router.use('/simple-api/v1/', router);
//
// }
