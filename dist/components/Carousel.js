'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _this.state = {
      feature: false,
      videos: []
    };

    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
      _this.state.feature = 'https://www.youtube.com/embed/rpUclk4By7o?ecver=2';
      _this.state.videos = ['https://www.youtube.com/embed/NjG6NVEZPec?list=PLR8Usl5iF-1p7QhZCs-_T7osJoZYzdba6&amp;ecver=2', 'https://www.youtube.com/embed/QNLb5kdRKM8?list=PLR8Usl5iF-1p7QhZCs-_T7osJoZYzdba6&amp;ecver=2', 'https://www.youtube.com/embed/PSmNum0XuS8?list=PLR8Usl5iF-1p7QhZCs-_T7osJoZYzdba6&amp;ecver=2'];
    } //do this to prevent client-side reload of the iframes


    return _this;
  }

  _createClass(Carousel, [{
    key: 'render',
    value: function render() {
      //REQUIRED
      return _react2.default.createElement(
        'section',
        { className: 'carousel' },
        _react2.default.createElement(
          'div',
          { className: 'feature' },
          this.state.feature ? _react2.default.createElement('iframe', { src: this.state.feature, allowFullScreen: true }) : null
        ),
        _react2.default.createElement(
          'div',
          { className: 'videos' },
          this.state.videos.map(function (v, i, a) {
            return _react2.default.createElement('iframe', { key: i, src: v, allowFullScreen: true });
          })
        )
      );
    }
  }]);

  return Carousel;
}(_react.Component);

exports.default = Carousel;