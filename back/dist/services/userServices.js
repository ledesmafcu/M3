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
exports.createUsersService = exports.getUserService = exports.getUsersService = void 0;
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    return "Obtener el listado de todos los usuarios.";
});
exports.getUsersService = getUsersService;
const getUserService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    return `Obtener el detalle de un usuario específico: ${id}`;
});
exports.getUserService = getUserService;
const createUsersService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    return `Registro de un nuevo usuario: ${userId}`;
});
exports.createUsersService = createUsersService;
