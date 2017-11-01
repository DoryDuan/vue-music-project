'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClass = addClass;
exports.hasClass = hasClass;
exports.getData = getData;
/**
 * Created by Administrator on 2017/9/20.
 */
function addClass(el, className) {
  if (hasClass(el, className)) {
    return;
  }

  var newClass = el.className.split(' ');
  newClass.push(className);
  el.className = newClass.join(' ').substring(1);
}

function hasClass(el, className) {
  var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
  return reg.test(el.className);
}

function getData(el, name, val) {
  var prefix = 'data-';
  if (val) {
    return el.setAttribute(prefix + name, val);
  }
  return el.getAttribute(prefix + name);
}

//# sourceMappingURL=dom-compiled.js.map