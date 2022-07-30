import 'dotenv/config';

export const MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME;
export const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
export const MONGO_DB_CLUSTER = process.env.MONGO_DB_CLUSTER;
export const MONGO_DB_NAME = process.env.MONGO_DB_NAME;
export const JWT_SECRET = process.env.JWT_SECRET || "defaultsecret";
