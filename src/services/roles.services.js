import RoleDAO from "../persistence/daos/RoleDAO";

let roleDAO = RoleDAO.createInstance();

export const documentCount = async () => {
    const count = await roleDAO.documentCount();
    return count
};

export const createRole = async (role) => {
    const roleCreated = await roleDAO.createRole(role);
    return roleCreated;
};

export const findRoles = async (roles) => {
    const rolesFinded = await roleDAO.findRoles(roles);
    return rolesFinded;
};

export const findRolesByUser = async (userRoles) => {
    const roles = await roleDAO.findRolesByUser(userRoles);
    return roles;
};