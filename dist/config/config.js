"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jwtSecret: process.env.JWT_SECRET || 'eshoradelrockIronmanII',
    DB: {
        HOST: process.env.HOST || 'localhost',
        USER: process.env.USER,
        PASSWORD: process.env.PASSWORD,
        DATABASE: process.env.DATABASE || 'MarvelGame'
    }
};
