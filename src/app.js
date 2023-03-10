import express from "express";
import cors from "cors";
import morgan from "morgan";
import pkg from "../package.json";
import { createRoles, createAdmin } from "./libs/initialSetup";
import router from "./routes";

const app = express();
createRoles();
createAdmin();

app.set('pkg', pkg);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', router);

export default app;