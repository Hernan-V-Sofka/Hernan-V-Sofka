"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const user_Register_1 = require("../controllers/user/user.Register");
router.post('/singup', user_Register_1.singUp);
router.post('/singin', user_Register_1.singIn);
exports.default = router;
