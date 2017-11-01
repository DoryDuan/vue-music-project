'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.getSingerList = getSingerList;

var _jsonp = require('common/js/jsonp');

var _jsonp2 = _interopRequireDefault(_jsonp);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Administrator on 2017/10/9.
 */
function getSingerList() {
  var url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';
  var data = (0, _assign2.default)({}, _config.commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    g_tk: 5381
  });
  return (0, _jsonp2.default)(url, data, _config.options);
}

//# sourceMappingURL=singer-compiled.js.map