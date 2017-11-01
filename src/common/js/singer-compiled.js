"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Administrator on 2017/10/9.
 */
var Singer = function Singer(_ref) {
  var id = _ref.id,
      name = _ref.name;
  (0, _classCallCheck3.default)(this, Singer);

  this.id = id;
  this.name = name;
  this.avatar = "https://y.gtimg.cn/music/photo_new/T001R300x300M000" + id + ".jpg?max_age=2592000";
};

exports.default = Singer;

//# sourceMappingURL=singer-compiled.js.map