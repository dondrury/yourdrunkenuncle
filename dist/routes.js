'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Layout = require('./components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Merch = require('./components/Merch');

var _Merch2 = _interopRequireDefault(_Merch);

var _NotFoundPage = require('./components/NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _Layout2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'merch', component: _Merch2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFoundPage2.default })
);

exports.default = routes;