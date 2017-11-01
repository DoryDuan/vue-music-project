'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.getRecommend = getRecommend;
exports.getDiscList = getDiscList;

var _jsonp = require('common/js/jsonp');

var _jsonp2 = _interopRequireDefault(_jsonp);

var _config = require('./config');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRecommend() {
  var url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  var data = (0, _assign2.default)({}, _config.commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  });
  return (0, _jsonp2.default)(url, data, _config.options);
} /**
   * Created by Administrator on 2017/9/18.
   */
function getDiscList() {
  var url = '/api/getDiscList';
  var data = (0, _assign2.default)({}, _config.commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  });
  return _axios2.default.get(url, {
    params: data
  }).then(function (res) {
    return _promise2.default.resolve(res.data);
  });
}

//# sourceMappingURL=recommend-compiled.js.map