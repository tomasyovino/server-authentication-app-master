import jwt from "jsonwebtoken";
import config from "../utils/config";
import { getUserById } from "../services/users.services";
import { findRolesByUser } from "../services/roles.services";

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        if(!token) return res.status(403).json({ message: "No token provided" });

        const decoded = jwt.verify(token, config.secret);
        req.userId = decoded.id;

        const user = await getUserById(req.userId);
        if(!user) return res.status(404).json({ message: "User not found" });

        if(user) next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized!" });
    };
};

export const isModerator = async (req, res, next) => {
    const user = await getUserById(req.userId);
    if(!user) return res.status(404).json({ message: "User not found" });

    const roles = await findRolesByUser(user.roles);

    for(let i = 0; i < roles.length; i++) {
        if(roles[i].name === "moderator") {
            next()
            return;
        };
    };

    return res.status(403).json({ message: "You don't have permissions to do that" });
};

export const isAdmin = async (req, res, next) => {
    const user = await getUserById(req.userId);
    if(!user) return res.status(404).json({ message: "User not found" });

    const roles = await findRolesByUser(user.roles);

    for(let i = 0; i < roles.length; i++) {
        if(roles[i].name === "admin") {
            next()
            return;
        };
    };

    return res.status(403).json({ message: "You don't have permissions to do that" });
};