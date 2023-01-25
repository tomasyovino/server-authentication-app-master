import dotenv from "dotenv";

dotenv.config();

const config = {
    port: process.env.PORT,
    db_uri: process.env.MONGO_URI,
    secret: process.env.JWT_SECRET,
    admin_email: process.env.ADMIN_EMAIL,
    admin_username: process.env.ADMIN_USERNAME,
    admin_password: process.env.ADMIN_PASSWORD
};

export default config;