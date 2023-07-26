import mongoose, { Schema } from "mongoose";
const CartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    products: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            price: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
export const Cart = mongoose.model("Cart", CartSchema);
