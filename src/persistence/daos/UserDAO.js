import DAOContainer from "../DAOContainer";
import { UserModel } from "../../models/User";
import RoleDAO from "./RoleDAO";

let instance = null;

class UserDAO extends DAOContainer {
    constructor() {
        super(UserModel)
    };

    static createInstance() {
        if (!instance) {
            instance = new UserDAO();
        };
        return instance;
    };

    async createUser(username, email, password, roles, firstName, lastName, phone) {
        const roleDAO = RoleDAO.createInstance();
        let foundRoles;
        
        const newUser = new UserModel({
            username,
            email,
            password: await UserModel.encryptPassword(password),
            firstName,
            lastName,
            phone
        });
        
        if(roles) {
            foundRoles = await roleDAO.findRoles(roles);
        } else {
            foundRoles = await roleDAO.findRoles();
        };
        newUser.roles = foundRoles.map(role => role._id);

        const savedUser = await newUser.save();
        return savedUser;
    };

    async findUser(username, email) {
        const user = await UserModel.find({$or: [{ username }, { email }]});
    };
};

export default UserDAO;