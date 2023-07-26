import mongoose, { Schema } from 'mongoose';
const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    parentCategory: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        default: null
    },
    subCategories: [{
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});
export const Category = mongoose.model('Category', categorySchema);
