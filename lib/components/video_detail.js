'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoDetail = function VideoDetail(_ref) {
  var video = _ref.video;

  console.log(video);
  if (!video) {
    return _react2.default.createElement(
      'div',
      null,
      ' Loading... '
    );
  }
  // craft own video url
  var videoId = video.id.videoId;
  console.log(videoId);
  // string interpolation, use `` not ''
  // or
  // const url = 'http://www.youtube.com/embed/' + videoId;
  var url = 'https://www.youtube.com/embed/' + videoId;
  console.log(url);

  return _react2.default.createElement(
    'div',
    { className: 'video-detail col-md-8' },
    _react2.default.createElement(
      'div',
      { className: 'embed-responsive embed-responsive-16by9' },
      _react2.default.createElement('iframe', { className: 'embed-responsive-item', src: url })
    ),
    _react2.default.createElement(
      'div',
      { className: 'details' },
      _react2.default.createElement(
        'div',
        null,
        video.snippet.title
      ),
      _react2.default.createElement(
        'div',
        null,
        video.snippet.description
      )
    )
  );
};

exports.default = VideoDetail;