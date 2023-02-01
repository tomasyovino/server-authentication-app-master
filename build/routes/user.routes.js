"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var usersCtrl = _interopRequireWildcard(require("../controllers/users.controller"));
var _middlewares = require("../middlewares");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var userRouter = (0, _express.Router)();
userRouter.get('/', usersCtrl.getUsersController);
userRouter.get('/:id', usersCtrl.getUserByIdController);
userRouter.post('/', [_middlewares.verifyToken, _middlewares.isAdmin, _middlewares.checkUsernameOrEmailExists, _middlewares.checkRolestExists, _middlewares.upload.single('image')], usersCtrl.createUserController);
userRouter.put('/:id', [_middlewares.verifyToken, _middlewares.isModerator, _middlewares.isAdmin, _middlewares.upload.single('image')], usersCtrl.updateUserByIdController);
userRouter["delete"]('/:id', [_middlewares.verifyToken, _middlewares.isModerator, _middlewares.isAdmin], usersCtrl.deleteUserByIdController);
var _default = userRouter;
exports["default"] = _default;