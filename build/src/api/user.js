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
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user-controller");
const encrypt_1 = require("../utils/encrypt");
const jwt_util_1 = require("../utils/jwt-util");
const router = express_1.default.Router();
exports.userRouter = router;
router.post('/api/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const user = yield (0, user_controller_1.getUser)({ email: userData.email });
        if (!user) {
            userData.password = yield (0, encrypt_1.encrypt)(userData.password);
            const token = yield (0, jwt_util_1.signToken)({ email: userData.email });
            const user = yield (0, user_controller_1.createUser)(userData);
            const response = { code: 200, message: 'Success', success: true, token: token };
            return res.send(response);
        }
        else {
            const response = { code: 400, message: 'User already exists!', success: false };
            return res.send(response);
        }
    }
    catch (error) {
        console.error(error);
        const response = { code: 500, message: 'Server Error!', success: false };
        return res.send(response);
    }
}));
router.post('/api/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('/login');
        const userData = req.body;
        const user = yield (0, user_controller_1.getUser)({ email: userData.email });
        if (user) {
            const isValidPassword = yield (0, encrypt_1.isEqual)(userData === null || userData === void 0 ? void 0 : userData.password, user.password);
            if (isValidPassword) {
                const token = yield (0, jwt_util_1.signToken)({ email: user.email });
                yield (0, user_controller_1.updateUser)({ email: userData.email }, { lastLogin: new Date() });
                const response = { code: 200, message: 'Success', success: true, token: token };
                return res.send(response);
            }
            else {
                const response = { code: 403, message: 'Wrong Password!', success: false };
                return res.send(response);
            }
        }
        else {
            const response = { code: 404, message: 'No User Found!', success: false };
            return res.send(response);
        }
    }
    catch (error) {
        console.error(error);
        const response = { code: 500, message: 'Server Error!', success: false };
        return res.send(response);
    }
}));
