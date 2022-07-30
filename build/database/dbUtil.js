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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const vars_1 = require("../utils/vars");
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    const connectionUrl = `mongodb+srv://${vars_1.MONGO_DB_USERNAME}:${vars_1.MONGO_DB_PASSWORD}@${vars_1.MONGO_DB_CLUSTER}.mongodb.net/${vars_1.MONGO_DB_NAME}`;
    mongoose_1.default.connect(connectionUrl);
});
exports.connect = connect;
