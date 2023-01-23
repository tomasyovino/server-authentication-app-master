import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role",
            },
        ],
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        imgUrl: { type: String },
        desc: { type: String, default: "" },
        phone: { type: Number, required: true }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    await bcrypt.compare(password, receivedPassword);
};

export const UserModel = mongoose.model("User", userSchema);