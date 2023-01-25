import DAOContainer from "../DAOContainer";
import { RoleModel } from "../../models/Role";

let instance = null;

class RoleDAO extends DAOContainer {
    constructor() {
        super(RoleModel)
    };

    static createInstance() {
        if (!instance) {
            instance = new RoleDAO();
        };
        return instance;
    };

    async createRole(name) {
        const newRole = await new RoleModel({ name }).save();
        return newRole;
    };

    async documentCount() {
        const count = await RoleModel.estimatedDocumentCount();
        return count;
    };

    async findRoles(roles) {
        let foundRoles
        if(roles) {
            foundRoles = await RoleModel.find({ name: { $in: roles } });
        } else {
            foundRoles = await RoleModel.find({ name: "user" });
        };
        return foundRoles;
    };

    async findRolesByUser(userRoles) {
        const roles = await RoleModel.find({ _id: { $in: userRoles } });
        return roles;
    };
};

export default RoleDAO;