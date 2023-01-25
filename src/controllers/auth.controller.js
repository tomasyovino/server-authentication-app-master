import jwt from "jsonwebtoken";
import { createUser, getUserByParam, compareUserPassword } from "../services/users.services";
import config from "../utils/config";

export const registerUserController = async (req, res) => {
    try {
        const { username, email, password, firstName, lastName, phone } = req.body;
        let roles = undefined;

        const user = await createUser(username, email, password, roles, firstName, lastName, phone);
        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).json({token});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal server error: User registration error"});
    };
};

export const loginUserController = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await getUserByParam(username);
        if(!user) return res.status(404).json({ message: "Invalid e-mail address or username" });

        const matchPassword = await compareUserPassword(password, user.password);
        if(!matchPassword) return res.status(404).json({ token: null, message: "Invalid password" });

        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });
        res.status(200).json({token});

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error: Error getting user" });
    };
};