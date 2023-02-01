"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
var _config = _interopRequireDefault(require("./config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_mongoose["default"].set('strictQuery', false);
_mongoose["default"].connect(_config["default"].db_uri).then(function () {
  return console.log("Database has been successfully connected");
})["catch"](function (err) {
  return console.log(err);
});