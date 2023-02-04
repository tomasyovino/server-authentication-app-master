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

    async createUser(username, email, password, roles, firstName, lastName, imgUrl, phone) {
        const roleDAO = RoleDAO.createInstance();
        let foundRoles;
        
        const newUser = new UserModel({
            username,
            email,
            password: await UserModel.encryptPassword(password),
            firstName,
            lastName,
            imgUrl,
            phone
        });
        
        if(roles) {
            foundRoles = await roleDAO.findRoles(roles);
        } else {
            foundRoles = await roleDAO.findRoles();
        };
        newUser.roles = await foundRoles.map(role => role._id);

        const savedUser = await newUser.save();
        return savedUser;
    };

    async updateUser(id, obj) {
        let userUpdated;

        if(obj.password) {
            const { password } = obj;
            userUpdated = await UserModel.findByIdAndUpdate(id, {
                $set: { 
                    password: await UserModel.encryptPassword(password)
                },
            }, { new: true });
        } else {
            userUpdated = await this.updateElementById(id, obj);
        };

        return userUpdated;
    };

    async findUserByParam(param) {
        const user = await UserModel.findOne({$or: [{ username: param }, { email: param }]}).populate("roles");
        return user;
    };

    async compareUserPassword(postedPassword, userPassword) {
        const matchPassword = await UserModel.comparePassword(postedPassword, userPassword);
        return matchPassword;
    };
};

export default UserDAO;