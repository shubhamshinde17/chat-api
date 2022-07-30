import mongoose from 'mongoose';
import { MONGO_DB_CLUSTER, MONGO_DB_NAME, MONGO_DB_PASSWORD, MONGO_DB_USERNAME } from '../utils/vars';

export const connect = async () => {
    const connectionUrl = `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@${MONGO_DB_CLUSTER}.mongodb.net/${MONGO_DB_NAME}`;
    mongoose.connect(connectionUrl);
}

