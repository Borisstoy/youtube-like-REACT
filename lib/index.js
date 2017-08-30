'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _youtubeApiSearch = require('youtube-api-search');

var _youtubeApiSearch2 = _interopRequireDefault(_youtubeApiSearch);

var _search_bar = require('./components/search_bar');

var _search_bar2 = _interopRequireDefault(_search_bar);

var _video_list = require('./components/video_list');

var _video_list2 = _interopRequireDefault(_video_list);

var _video_detail = require('./components/video_detail');

var _video_detail2 = _interopRequireDefault(_video_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import '../style/style.scss';

var API_KEY = 'AIzaSyDwo9dVAybSilX2rap1EaMS9dVl0ehCdzc';

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      videos: [],
      selectedVideo: null
    };

    _this.videoSearch('aphex twin');
    return _this;
  }

  _createClass(App, [{
    key: 'videoSearch',
    value: function videoSearch(term) {
      var _this2 = this;

      (0, _youtubeApiSearch2.default)({ key: API_KEY, term: term }, function (videos) {
        _this2.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var videoSearch = _lodash2.default.debounce(function (term) {
        _this3.videoSearch(term);
      }, 300);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_search_bar2.default, { onSearchTermChange: videoSearch }),
        _react2.default.createElement(_video_detail2.default, { video: this.state.selectedVideo }),
        _react2.default.createElement(_video_list2.default, {
          onVideoSelect: function onVideoSelect(selectedVideo) {
            return _this3.setState({ selectedVideo: selectedVideo });
          },
          videos: this.state.videos })
      );
    }
  }]);

  return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector('.container'));