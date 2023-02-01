"use strict";

var _app = _interopRequireDefault(require("./app"));
var _config = _interopRequireDefault(require("./utils/config"));
require("./utils/db");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_app["default"].get("/", function (req, res) {
  res.json({
    name: _app["default"].get('pkg').name,
    description: _app["default"].get('pkg').description,
    version: _app["default"].get('pkg').version,
    author: _app["default"].get('pkg').author
  });
});
_app["default"].listen(_config["default"].port, function () {
  return console.log('Server listen on port', _config["default"].port);
});