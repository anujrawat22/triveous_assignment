var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { User } from "../models/userModel";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password, roles } = req.body;
        const existingUser = yield User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ msg: "User already exists" });
        }
        const hash = yield bcrypt.hash(password, 5);
        const user = new User({ email, username, password: hash, roles });
        yield user.save();
        res.status(201).send({ msg: "Registration successful" });
    }
    catch (error) {
        console.log("Error", error);
        res.status(500).send({ msg: "Failed to create User" });
    }
});
export const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield User.findOne({ email });
        if (!user) {
            return res.status(404).send({ msg: "User doesn't exist, Please login" });
        }
        const isPasswordValid = yield bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ msg: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id, username: user.username, roles: user.roles }, process.env.SECRET_KEY);
        res.status(201).send({ msg: "Login Successful", token });
    }
    catch (error) {
        console.log("Login error", error);
        res.status(500).send({ msg: "Failed to login User" });
    }
});
