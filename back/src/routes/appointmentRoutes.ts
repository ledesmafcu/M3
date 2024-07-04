import { Router } from "express";
import { cancelAppointments, getAppointment, getAppointments, scheduleAppointments } from "../controllers/appointmentController";

const appointmentRouter:Router = Router();
//get all apps
appointmentRouter.get('/appointments', getAppointments);
//get one app
appointmentRouter.get('/appointment/:id', getAppointment);
//schedule apps
appointmentRouter.post('/appointment/schedule', scheduleAppointments);
//cancel apps
appointmentRouter.put('/appointment/cancelar/:id', cancelAppointments);

export default appointmentRouter;