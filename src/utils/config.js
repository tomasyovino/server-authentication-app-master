import dotenv from "dotenv";

dotenv.config();

const config = {
    port: process.env.PORT,
    db_uri: process.env.MONGO_URI
};

export default config;