import jwt from "jsonwebtoken";
import { createUser, getUserByParam, compareUserPassword } from "../services/users.services";
import UserDTO from "../persistence/dtos/UserDTO";
import config from "../utils/config";

export const registerUserController = async (req, res) => {
    try {
        const { username, email, password, firstName, lastName, phone } = req.body;
        let imgUrl = req.file ? req.file.path : "https://res.cloudinary.com/dtyrld6tv/image/upload/v1675038292/authenticator/1946429_ytb3wg.png";
        let roles = undefined;

        const newUser = await createUser(username, email, password, roles, firstName, lastName, imgUrl, phone);
        const user = new UserDTO(newUser);
        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).json({user, token});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal server error: User registration error"});
    };
};

export const loginUserController = async (req, res) => {
    try {
        const { username, password } = req.body;

        const getUser = await getUserByParam(username);
        if(!getUser) return res.status(404).json({ message: "Invalid e-mail address or username" });

        const matchPassword = await compareUserPassword(password, getUser.password);
        if(!matchPassword) return res.status(404).json({ token: null, message: "Invalid password" });

        const user = new UserDTO(getUser);
        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).json({user, token});
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error: Error getting user" });
    };
};