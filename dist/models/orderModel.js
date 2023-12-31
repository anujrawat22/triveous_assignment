"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
// models/order.ts
const mongoose_1 = __importStar(require("mongoose"));
/**
 * @openapi
 * components:
 *  schemas :
 *    OrderRes :
 *      type : object
 *      required :
 *         - userId
 *         - products
 *         - total
 *         - shippingAddress
 *         - paymentMethod
 *         - paymentStatus
 *         - status
 *         - createdAt
 *      properties :
 *          userId :
 *            type : string
 *            default : ObjectId('64ab9737fb19c893fd4ea6fe')
 *          total :
 *             type : number
 *             default : 2
 *          shippingAddress :
 *              type : string
 *              default : sudhowala,dehradun
 *          paymentMethod :
 *              type : string
 *              default : cash
 *          paymentStatus :
 *              type : string
 *              default : pending
 *          status :
 *              type : string
 *              default : processing
 *          createdAt :
 *              type : string
 *              default : 2023-10-2
 */
const orderSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products: [
        {
            product: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],
    total: {
        type: Number,
        required: true,
    },
    shippingAddress: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    paymentStatus: {
        type: String,
        required: true,
        default: 'pending',
        enum: ['pending', 'paid', 'failed'],
    },
    status: {
        type: String,
        required: true,
        default: 'processing',
        enum: ['processing', 'shipped', 'delivered', 'cancelled'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
exports.Order = mongoose_1.default.model('Order', orderSchema);
