'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tours = function (_Component) {
  _inherits(Tours, _Component);

  function Tours() {
    _classCallCheck(this, Tours);

    return _possibleConstructorReturn(this, (Tours.__proto__ || Object.getPrototypeOf(Tours)).call(this));
  }

  _createClass(Tours, [{
    key: 'render',
    value: function render() {
      //REQUIRED
      return _react2.default.createElement(
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
            'Book Your Amazing '
          ),
          _react2.default.createElement(
            'span',
            { className: 'bottom' },
            'Irish Odyssey Now'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'pure-g content' },
          _react2.default.createElement('div', { className: 'pure-u-1 pure-u-md-1-2' }),
          _react2.default.createElement(
            'div',
            { className: 'pure-u-1 pure-u-md-1-2' },
            _react2.default.createElement(
              'p',
              null,
              'Explore the unparalleled beauty, culture, and history of the Emerald Isle with your experienced and passionate hosts, Grant & Sloan. Meet the people and hear the stories that make Ireland such an unforgettable place.'
            )
          ),
          _react2.default.createElement('div', { className: 'pure-u-1 pure-u-sm-1-3 pure-u-md-3-5' }),
          _react2.default.createElement(
            'div',
            { className: 'pure-u-1 pure-u-sm-2-3 pure-u-md-2-5' },
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement('img', { src: 'img/PlaceHolderIcon-Eat.png' }),
              _react2.default.createElement(
                'div',
                null,
                'Eat'
              )
            ),
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement('img', { src: 'img/PlaceHolderIcon-Plane.png' }),
              _react2.default.createElement(
                'div',
                null,
                'Stay'
              )
            ),
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement('img', { src: 'img/PlaceHolderIcon-hiker.png' }),
              _react2.default.createElement(
                'div',
                null,
                'Transpo'
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'button',
                null,
                'Find Out More'
              )
            )
          )
        )
      );
    }
  }]);

  return Tours;
}(_react.Component);

exports.default = Tours;