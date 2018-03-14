'use strict';
/* fuser command should kill running process in git hook */

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _http = require('http');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _NotFoundPage = require('./components/NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initialize the server and configure support for ejs templates
var app = new _express2.default();
var server = new _http.Server(app);

app.set('view engine', 'ejs');
app.set('views', _path2.default.join(__dirname, 'views'));
// define the folder that will be used for static assets
app.use(_express2.default.static(_path2.default.join(__dirname, 'static'))); //this is catching the root route!
// universal routing and rendering
app.get('*', function (req, res) {

  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
    // in case of error display the error message
    if (err) {
      return res.status(500).send(err.message);
    }

    // in case of redirect propagate the redirect to the browser
    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }
    // generate the React markup for the current route
    var markup = "";
    if (renderProps) {
      // if the current route matched we have renderProps
      markup = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
    } else {
      // otherwise we can render a 404 page
      markup = (0, _server.renderToString)(_react2.default.createElement(_NotFoundPage2.default, null));
      res.status(404);
    }

    /* good place to grab any cache for templates */

    // render the index template with the embedded React markup (this is where all the other pages get rendered)
    return res.render('index', { markup: markup /*good place to pass values to template */ });
  });
});

// start the server
var port = process.env.PORT || 3004;
var env = process.env.NODE_ENV || 'production';
server.listen(port, function (err) {
  if (err) {
    return console.error(err);
  }
  console.info('Server running on http://localhost:' + port + ' [' + env + ']');
});