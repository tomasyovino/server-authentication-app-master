import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import router from "./routes";

const app = express();

app.set('pkg', pkg);
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', router);

export default app;