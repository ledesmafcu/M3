"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentController_1 = require("../controllers/appointmentController");
const appointmentRouter = (0, express_1.Router)();
//get all apps
appointmentRouter.get('./appointments', appointmentController_1.getAppointments);
//get one app
appointmentRouter.get('./appointment', appointmentController_1.getAppointment);
//schedule apps
appointmentRouter.post('./appointment/schedule', appointmentController_1.scheduleAppointments);
//cancel apps
appointmentRouter.put('./appointment/cancelar', appointmentController_1.cancelAppointments);
exports.default = appointmentRouter;
