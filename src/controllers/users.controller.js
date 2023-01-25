import jwt from "jsonwebtoken";
import { getUsers, getUserById, createUser, updateUserById, deleteUserById } from "../services/users.services";
import UserDTO from "../persistence/dtos/UserDTO";
import config from "../utils/config";

export const getUsersController = async (req, res) => {
    try {
        const query = req.query.new;
        const users = await getUsers(query);
        const usersDTO = users.map(user => new UserDTO(user));
        res.status(200).json(usersDTO);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error: Error getting users" });
    };
};

export const getUserByIdController = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if(user) {
            const userDTO = new UserDTO(user);
            res.status(200).json(userDTO);
        } else {
            res.status(404).json({ message: "User not found" });
        };
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error: Error getting user" });
    };
};

export const createUserController = async (req, res) => {
    try {
        const { username, email, password, roles, firstName, lastName, phone } = req.body;
        const user = await createUser(username, email, password, roles, firstName, lastName, phone);

        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).json({token});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal server error: User creation error"});
    };
};

export const updateUserByIdController = async (req, res) => {
    try {
        const user = await updateUserById(req.params.id, req.body);
        if(user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        };
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error: Error updating user" });
    };
};

export const deleteUserByIdController = async (req, res) => {
    try {
        const user = deleteUserById(req.params.id);
        if(user) {
            res.status(200).json({ message: "User deleted" });
        } else {
            res.status(404).json({ message: "User not found" });
        };
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error: Error deleting user" });
    };
};