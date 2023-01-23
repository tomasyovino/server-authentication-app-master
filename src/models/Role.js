import mongoose from "mongoose";

export const ROLES = ["user", "admin", "moderator"];

const roleSchema = new mongoose.Schema(
    {
        name: String,
    },
    {
        versionKey: false,
    }
);

export const RoleModel = mongoose.model("Role", roleSchema);