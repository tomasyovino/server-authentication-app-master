import { Router } from "express";
import * as usersCtrl from "../controllers/users.controller";

const userRouter = Router();

userRouter.get('/', usersCtrl.getUsers);
userRouter.get('/:id', usersCtrl.getUserById);
userRouter.post('/', usersCtrl.createUser);
userRouter.put('/', usersCtrl.updateUserById);
userRouter.delete('/:id', usersCtrl.deleteUserById);

export default userRouter;