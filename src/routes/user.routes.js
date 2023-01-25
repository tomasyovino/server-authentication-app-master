import { Router } from "express";
import * as usersCtrl from "../controllers/users.controller";
import { verifyToken, isModerator, isAdmin, checkUsernameOrEmailExists, checkRolestExists } from "../middlewares";

const userRouter = Router();

userRouter.get('/', usersCtrl.getUsersController);
userRouter.get('/:id', usersCtrl.getUserByIdController);
userRouter.post('/', [verifyToken, isAdmin, checkUsernameOrEmailExists, checkRolestExists], usersCtrl.createUserController);
userRouter.put('/:id', [verifyToken, isModerator, isAdmin], usersCtrl.updateUserByIdController);
userRouter.delete('/:id', [verifyToken, isModerator, isAdmin], usersCtrl.deleteUserByIdController);

export default userRouter;