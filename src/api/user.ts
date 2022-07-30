import express from "express";
import { createUser, getUser, updateUser } from "../controllers/user-controller";
import APIResponse from "../interfaces/response";
import { encrypt, isEqual } from "../utils/encrypt";
import { signToken } from "../utils/jwt-util";

const router = express.Router();

router.post('/api/register', async (req, res) => {
    try {
        const userData = req.body;
        const user = await getUser({ email: userData.email });
        if (!user) {
            userData.password = await encrypt(userData.password);
            const token = await signToken({ email: userData.email });
            const user = await createUser(userData);
            const response: APIResponse = { code: 200, message: 'Success', success: true, token: token }
            return res.send(response)
        } else {
            const response: APIResponse = { code: 400, message: 'User already exists!', success: false }
            return res.send(response)
        }
    } catch (error) {
        console.error(error)
        const response: APIResponse = { code: 500, message: 'Server Error!', success: false }
        return res.send(response)
    }
})

router.post('/api/login', async (req, res) => {
    try {
        console.log('/login')
        const userData = req.body;
        const user = await getUser({ email: userData.email });
        if (user) {
            const isValidPassword = await isEqual(userData?.password, user.password);
            if (isValidPassword) {
                const token = await signToken({ email: user.email });
                await updateUser({ email: userData.email }, { lastLogin: new Date() });
                const response: APIResponse = { code: 200, message: 'Success', success: true, token: token }
                return res.send(response)
            } else {
                const response: APIResponse = { code: 403, message: 'Wrong Password!', success: false }
                return res.send(response)
            }
        } else {
            const response: APIResponse = { code: 404, message: 'No User Found!', success: false }
            return res.send(response)
        }
    } catch (error) {
        console.error(error)
        const response: APIResponse = { code: 500, message: 'Server Error!', success: false }
        return res.send(response)
    }
})

export { router as userRouter }