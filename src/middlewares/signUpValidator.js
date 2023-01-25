import { ROLES } from "../models/Role";
import { getUserByParam } from "../services/users.services";

export const checkUsernameOrEmailExists = async (req, res, next) => {
    const username = await getUserByParam(req.body.username);
    if(username) return res.status(400).json({ message: "User already exists" });

    const email = await getUserByParam(req.body.email);
    if(email) return res.status(400).json({ message: "User email already exists" });

    next();
};

export const checkRolestExists = async (req, res, next) => {
    if(req.body.roles) {
        for(let i = 0; i < req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i])) {
                return res.status(400).json({
                    message: `Role ${req.body.roles[i]} doest not exists`
                });
            };
        };
    };

    next();
};