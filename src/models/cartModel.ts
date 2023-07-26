import mongoose, { Schema, Model, Document } from "mongoose";

interface ICartItem {
  productId: Schema.Types.ObjectId;
  quantity: number;
}

export interface ICart extends Document {
  userId: Schema.Types.ObjectId;
  products: ICartItem[];
  createdAt: Date;
}

const CartSchema: Schema<ICart> = new Schema({
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
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Cart: Model<ICart> = mongoose.model<ICart>("Cart", CartSchema);
