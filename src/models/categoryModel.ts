import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICategory extends Document {
    name : string;
    description : string;
    parentCategory? : Schema.Types.ObjectId | null;
    subCategories : Schema.Types.ObjectId[];
    createdAt : Date;
}

const categorySchema : Schema<ICategory> = new Schema({
    name : { 
        type  : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true
    },
    parentCategory : {
        type : Schema.Types.ObjectId,
        ref : 'Category',
        default : null
    },
    subCategories : [{
        type : Schema.Types.ObjectId,
        ref : 'Category'
    }],
    createdAt : {
        type : Date,
        default : Date.now
    }
})

export const Category : Model<ICategory> = mongoose.model<ICategory>('Category',categorySchema)