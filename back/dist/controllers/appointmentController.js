"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointments = exports.scheduleAppointments = exports.getAppointment = exports.getAppointments = void 0;
const appointmentServices_1 = require("../services/appointmentServices");
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const message = yield (0, appointmentServices_1.getAppointmentsService)();
    res.send(message);
});
exports.getAppointments = getAppointments;
const getAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const message = yield (0, appointmentServices_1.getAppointmentService)();
    res.send(message);
});
exports.getAppointment = getAppointment;
const scheduleAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const message = yield (0, appointmentServices_1.scheduleAppointmentsService)();
    res.send(message);
});
exports.scheduleAppointments = scheduleAppointments;
const cancelAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const message = yield (0, appointmentServices_1.cancelAppointmentsService)();
    res.send(message);
});
exports.cancelAppointments = cancelAppointments;
