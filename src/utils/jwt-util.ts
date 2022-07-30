import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./vars";

export const signToken = async (obj: any) => {
    const token = jwt.sign(obj, JWT_SECRET, {
        expiresIn: 3600
    })
    return token;
}

export const verifyToken = async (token: string) => {
    const data = jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return null;
        }
        return decoded;
    })
    return data;
}