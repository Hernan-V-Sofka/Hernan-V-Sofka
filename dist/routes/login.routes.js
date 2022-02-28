"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const user_Login_1 = require("../controllers/user/user.Login");
router.post('/singup', user_Login_1.singUp);
router.post('/singin', user_Login_1.singIn);
exports.default = router;
