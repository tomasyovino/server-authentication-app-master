import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller";
import { checkUsernameOrEmailExists } from "../middlewares";

const authRouter = Router();

authRouter.post('/register', checkUsernameOrEmailExists, authCtrl.registerUserController);
authRouter.post('/login', authCtrl.loginUserController);

export default authRouter;