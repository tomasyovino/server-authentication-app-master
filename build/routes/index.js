"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auth = _interopRequireDefault(require("./auth.routes"));
var _user = _interopRequireDefault(require("./user.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.use("/auth", _auth["default"]);
router.use("/user", _user["default"]);
var _default = router;
exports["default"] = _default;