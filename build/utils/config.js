"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var config = {
  port: process.env.PORT,
  db_uri: process.env.MONGO_URI,
  secret: process.env.JWT_SECRET,
  admin_email: process.env.ADMIN_EMAIL,
  admin_username: process.env.ADMIN_USERNAME,
  admin_password: process.env.ADMIN_PASSWORD,
  admin_imgUrl: process.env.ADMIN_IMG_URL,
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    cloud_api_key: process.env.CLOUDINARY_API_KEY,
    cloud_api_secret: process.env.CLOUDINARY_API_SECRET
  }
};
var _default = config;
exports["default"] = _default;