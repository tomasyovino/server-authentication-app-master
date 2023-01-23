import DAOContainer from "../DAOContainer";
import { UserModel } from "../../models/User";

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
        const newUser = new UserModel({
            username,
            email,
            password: await UserModel.encryptPassword(password),
            roles,
            firstName,
            lastName,
            phone
        });
        const savedUser = await newUser.save();

        return savedUser;
    };

    async findUser(username, email) {
        const user = await UserModel.find({$or: [{ username }, { email }]});
    };
};

export default UserDAO;