var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const authMiddlware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const token = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(" ")[1];
        if (!token) {
            return res.status(401).send({ msg: "Unauthorized" });
        }
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        if (!decodedToken) {
            return res.status(401).send({ msg: "Invalid token" });
        }
        req.body.userId = decodedToken.userId;
        req.body.roles = decodedToken.roles;
        next();
    }
    catch (error) {
        console.error('Authentication error:', error);
        res.status(500).json({ message: 'Authentication failed' });
    }
});
