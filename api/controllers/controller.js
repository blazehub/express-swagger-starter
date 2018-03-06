"use strict";
//controllers
const userController = require("./user.controller.js");

//exports
var exports = {};
exports.v1_userCreate = userController.create;
exports.v1_userList = userController.index;
exports.v1_userShow = userController.show;
exports.v1_userDestroy = userController.destroy;
exports.v1_userUpdate = userController.update;

module.exports = exports;
    