import RoleDAO from "../persistence/daos/RoleDAO";

let roleDAO = RoleDAO.createInstance();

export const createRoles = async () => {
    try {
        const count = await roleDAO.documentCount();

        if(count > 0) return;

        const values = await Promise.all([
            roleDAO.createRole("user"),
            roleDAO.createRole("moderator"),
            roleDAO.createRole("admin"),
        ]);

        console.log(values);
    } catch (err) {
        console.log(err);
    };
};