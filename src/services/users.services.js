import UserDAO from "../persistence/daos/UserDAO";

let userDAO = UserDAO.createInstance();

export const getUsers = async (query) => {
    const users = await userDAO.findAllElements(query);
    return users;
};

export const getUserById = async (id) => {
    const user = await userDAO.findElementById(id);
    return user;
};

export const getUserByParam = async (param) => {
    const user = await userDAO.findUserByParam(param);
    return user;
};

export const compareUserPassword = async (receivedPassword, password) => {
    const matchPassword = await userDAO.compareUserPassword(receivedPassword, password);
    return matchPassword;
};

export const createUser = async (username, email, password, roles, firstName, lastName, imgUrl, phone) => {
    const user = await userDAO.createUser(username, email, password, roles, firstName, lastName, imgUrl, phone);
    return user;
};

export const updateUserById = async (id, obj) => {
    const user = await userDAO.updateElementById(id, obj);
    return user;
};

export const deleteUserById = async (id) => {
    const user = await userDAO.deleteElementById(id);
    return user;
};