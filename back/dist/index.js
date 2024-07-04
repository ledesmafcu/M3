"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const envt_1 = require("./config/envt");
const server_1 = __importDefault(require("./server"));
server_1.default.listen(envt_1.PORT, () => {
    console.log(`Server listening on port ${envt_1.PORT}`);
});
