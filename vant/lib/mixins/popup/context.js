"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  zIndex: 2000,
  stack: [],
  lockCount: 0,

  get top() {
    return this.stack[this.stack.length - 1];
  }

};
exports.default = _default;