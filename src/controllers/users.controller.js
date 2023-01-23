import UserDAO from "../persistence/daos/UserDAO";

let userDAO = UserDAO.createInstance();

export const getUsers = async (req, res) => {
    try {
        const query = req.query.new;
        const users = await userDAO.findAllElements(query);
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error getting users" });
    };
};

export const getUserById = async (req, res) => {
    try {
        const user = await userDAO.findElementById(req.params.id);
        if(user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        };
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error getting user" });
    };
};

export const createUser = async (req, res) => {
    res.json("createUser");
};

export const updateUserById = async (req, res) => {
    try {
        const user = await userDAO.updateElementById(req.params.id, req.body);
        if(user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        };
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error updating user" });
    };
};

export const deleteUserById = async (req, res) => {
    try {
        const user = await userDAO.deleteElementById(req.params.id);
        if(user) {
            res.status(200).json({ message: "User deleted" });
        } else {
            res.status(404).json({ message: "User not found" });
        };
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error deleting user" });
    };
};