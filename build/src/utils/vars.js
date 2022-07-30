"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = exports.MONGO_DB_NAME = exports.MONGO_DB_CLUSTER = exports.MONGO_DB_PASSWORD = exports.MONGO_DB_USERNAME = void 0;
require("dotenv/config");
exports.MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME;
exports.MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
exports.MONGO_DB_CLUSTER = process.env.MONGO_DB_CLUSTER;
exports.MONGO_DB_NAME = process.env.MONGO_DB_NAME;
exports.JWT_SECRET = process.env.JWT_SECRET || "defaultsecret";
