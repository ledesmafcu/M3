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
exports.cancelAppointmentsService = exports.scheduleAppointmentsService = exports.getAppointmentService = exports.getAppointmentsService = void 0;
const getAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return "Obtener el listado de todos los turnos de todos los usuarios";
});
exports.getAppointmentsService = getAppointmentsService;
const getAppointmentService = () => __awaiter(void 0, void 0, void 0, function* () {
    return "Obtener el detalle de un turno específico";
});
exports.getAppointmentService = getAppointmentService;
const scheduleAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return "Agendar un nuevo turno";
});
exports.scheduleAppointmentsService = scheduleAppointmentsService;
const cancelAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return "Cambiar el status de un turno a cancelled";
});
exports.cancelAppointmentsService = cancelAppointmentsService;
