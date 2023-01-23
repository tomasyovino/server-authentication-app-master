import mongoose from "mongoose";
import config from "./config"


mongoose.set('strictQuery', false);
mongoose.connect(config.db_uri)
    .then(() => console.log("Database has been successfully connected"))
    .catch(err => console.log(err));