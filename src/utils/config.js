import dotenv from "dotenv";

dotenv.config();

const config = {
    port: process.env.PORT,
    db_uri: process.env.MONGO_URI,
    secret: process.env.JWT_SECRET,
    admin_email: process.env.ADMIN_EMAIL,
    admin_username: process.env.ADMIN_USERNAME,
    admin_password: process.env.ADMIN_PASSWORD,
    admin_imgUrl: process.env.ADMIN_IMG_URL,
    cloudinary: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        cloud_api_key: process.env.CLOUDINARY_API_KEY,
        cloud_api_secret: process.env.CLOUDINARY_API_SECRET
    }
};

export default config;