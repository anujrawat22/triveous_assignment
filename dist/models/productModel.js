import mongoose, { Schema } from "mongoose";
const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    specification: {
        type: String,
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    images: [{
            type: String, required: true
        }],
    mainImage: {
        type: String, required: true
    },
    brand: {
        type: String, required: true
    },
    model: {
        type: String, required: true
    },
    colours: [{
            type: String, required: true
        }],
    warrantyPeriod: {
        type: Number, required: true
    }
});
export const Product = mongoose.model("Product", productSchema);
