import bcrypt from 'bcryptjs';

export const encrypt = async (str: string) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(str, salt);
    return hash;
}

export const isEqual = async (str: string, hash: string) => {
    const isEqual = await bcrypt.compare(str, hash);
    return isEqual;
}