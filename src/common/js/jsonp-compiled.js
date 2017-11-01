'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = jsonp;
exports.param = param;

var _jsonp = require('jsonp');

var _jsonp2 = _interopRequireDefault(_jsonp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);

  return new _promise2.default(function (resolve, reject) {
    (0, _jsonp2.default)(url, option, function (err, data) {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
} /**
   * Created by Administrator on 2017/9/18.
   */
function param(data) {
  var url = '';
  for (var k in data) {
    var value = data[k] !== undefined ? data[k] : '';
    url += '&' + k + '=' + encodeURIComponent(value);
  }
  return url ? url.substring(1) : '';
}

//# sourceMappingURL=jsonp-compiled.js.map