import mongoose, { Schema } from "mongoose";
export var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["USER"] = "user";
})(UserRole || (UserRole = {}));
const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    contact: { type: Number, required: true },
    roles: { type: String, enum: Object.values(UserRole), default: UserRole.USER }
});
export const User = mongoose.model('User', userSchema);
