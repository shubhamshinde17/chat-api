import { User } from "../models/user";

export const createUser = async (user: any) => {
    const createdUser = await User.create(user);
    return createdUser;
}

export const getUser = async (queryObj: any) => {
    const user = await User.findOne(queryObj);
    return user;
}

export const updateUser = async (queryObj: any, user: any) => {
    const updatedUser = await User.updateOne(queryObj, user);
    return updatedUser;
}

