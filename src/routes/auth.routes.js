import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller";
import { checkUsernameOrEmailExists, upload } from "../middlewares";

const authRouter = Router();

authRouter.post('/register', [ checkUsernameOrEmailExists, upload.single('image') ], authCtrl.registerUserController);
authRouter.post('/login', authCtrl.loginUserController);

export default authRouter;