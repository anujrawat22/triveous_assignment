    // models/order.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

interface IProductItem {
  product: Schema.Types.ObjectId;
  quantity: number;
  price: number;
}

export interface IOrder extends Document {
  userId: Schema.Types.ObjectId;
  products: IProductItem[];
  total: number;
  shippingAddress: string;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed';
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
}

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

const orderSchema: Schema<IOrder> = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
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

export  const Order: Model<IOrder> = mongoose.model<IOrder>('Order', orderSchema);

 
