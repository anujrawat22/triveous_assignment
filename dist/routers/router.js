"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeRouter = (0, express_1.Router)();
homeRouter.get("/", (req, res) => {
    res.send("<h1>Welcome to trevious ecommerce app</h1>");
});
exports.default = homeRouter;
//# sourceMappingURL=router.js.map