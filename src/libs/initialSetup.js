import { documentCount, createRole } from "../services/roles.services";
import { getUserByParam, createUser } from "../services/users.services";
import config from "../utils/config";

export const createRoles = async () => {
    try {
        const count = await documentCount();

        if(count > 0) return;

        const values = await Promise.all([
            createRole("user"),
            createRole("moderator"),
            createRole("admin"),
        ]);

        console.log(values);
    } catch (err) {
        console.log(err);
    };
};

export const createAdmin = async () => {
    try {
        const admin_username = await getUserByParam(config.admin_username);
        const admin_email = await getUserByParam(config.admin_email);
        if (admin_username || admin_email) return;
    
        const roles = ["admin", "moderator"];
    
        const newUser = await createUser(
            config.admin_username, 
            config.admin_email, 
            config.admin_password, 
            roles, 
            "admin", 
            "admin", 
            4242424242
        );
    
        console.log(`New user created: ${newUser.email}`);
    } catch (err) {
        console.log(err);
    };
};