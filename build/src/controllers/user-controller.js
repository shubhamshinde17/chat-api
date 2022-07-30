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
exports.updateUser = exports.getUser = exports.createUser = void 0;
const user_1 = require("../models/user");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const createdUser = yield user_1.User.create(user);
    return createdUser;
});
exports.createUser = createUser;
const getUser = (queryObj) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.User.findOne(queryObj);
    return user;
});
exports.getUser = getUser;
const updateUser = (queryObj, user) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield user_1.User.updateOne(queryObj, user);
    return updatedUser;
});
exports.updateUser = updateUser;
