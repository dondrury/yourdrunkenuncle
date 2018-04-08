'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Carousel = require('./Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      //REQUIRED
      return _react2.default.createElement(
        'div',
        { className: 'home-page' },
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          _react2.default.createElement('img', { src: 'img/YDU-head.png' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'logo sub-logo' },
          _react2.default.createElement('img', { src: 'img/Subscribe.png' }),
          _react2.default.createElement(
            'h1',
            null,
            'Life through the bibulous perspective of Grant & Sloan'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'ribbon' },
          _react2.default.createElement('div', null)
        ),
        _react2.default.createElement(_Carousel2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'tours' },
          _react2.default.createElement(
            'div',
            { className: 'title push-down' },
            _react2.default.createElement(
              'h2',
              null,
              'TOURS'
            ),
            _react2.default.createElement(
              'span',
              { className: 'top' },
              'Ireland Trip Itinerary'
            ),
            _react2.default.createElement(
              'span',
              { className: 'bottom' },
              'Book Your Amazing Irish Vacation Today'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'pure-g content' },
            _react2.default.createElement('div', { className: 'pure-u-1' }),
            _react2.default.createElement('div', { className: 'pure-u-1 pure-u-md-1-2' }),
            _react2.default.createElement(
              'div',
              { className: 'pure-u-1 pure-u-md-1-2' },
              _react2.default.createElement(
                'p',
                null,
                'Explore the unparalleled beauty, culture, and history of the Emerald Isle with your experienced and passionate hosts, Grant & Sloan. Meet the people and hear the stories that make Ireland such an unforgettable place.'
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;