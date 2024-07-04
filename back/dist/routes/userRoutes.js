"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userRouter = (0, express_1.Router)();
//Create
userRouter.post('/users', userController_1.createUsers);
//Read
userRouter.get('/users', userController_1.getUsers);
userRouter.get('/users/:id', userController_1.getUser);
//Update
//Delete
//userRouter.get('/users/:id', getUser);
exports.default = userRouter;
