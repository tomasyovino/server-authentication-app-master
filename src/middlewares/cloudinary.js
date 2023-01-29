import multer from "multer";
import cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import config from "../utils/config";

cloudinary.v2.config({
    cloud_name: config.cloudinary.cloud_name,
    api_key: config.cloudinary.cloud_api_key,
    api_secret: config.cloudinary.cloud_api_secret
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary.v2,
    params: {
        folder: "authenticator",
        format: async (req, file) => 'png',

    },
    transformation: [{ width: 500, height: 500, crop: "limit" }]
});
const upload = multer({ storage: storage });

export { upload };