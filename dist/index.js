"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const categoryRouter_1 = __importDefault(require("./routes/categoryRouter"));
const productRouter_1 = __importDefault(require("./routes/productRouter"));
const cartRouter_1 = __importDefault(require("./routes/cartRouter"));
const orderRouter_1 = __importDefault(require("./routes/orderRouter"));
const authenticationMiddleware_1 = require("./middlewares/authenticationMiddleware");
const router_1 = __importDefault(require("./routes/router"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Trevious ecommerce app',
            version: '1.0.0',
        },
        servers: [
            {
                url: "https://trivious.onrender.com"
            }
        ]
    },
    apis: ['./src/index.ts', './src/routes/*.ts', './src/models/*.ts'], // files containing annotations as above
};
const openapiSpecification = (0, swagger_jsdoc_1.default)(options);
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(openapiSpecification));
app.use("/api", router_1.default);
app.use("/api/user", userRouter_1.default);
app.use("/api/category", categoryRouter_1.default);
app.use("/api/product", productRouter_1.default);
app.use("/api/cart", authenticationMiddleware_1.authMiddlware, cartRouter_1.default);
app.use("/api/order", authenticationMiddleware_1.authMiddlware, orderRouter_1.default);
/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.connection;
        console.log("Connected to DB");
        console.log(`Listening on PORT ${port}`);
    }
    catch (error) {
        console.log(error);
    }
}));
