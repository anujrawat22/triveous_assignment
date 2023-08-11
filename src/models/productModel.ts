import mongoose , { Schema ,Model , Document
} from "mongoose";


export interface IProduct extends Document {
    title : string;
    price : number;
    description : string;
    specification : string;
    categoryId : Schema.Types.ObjectId;
    images : string[];
    mainImage : string;
    brand : string;
    model : string;
    colours : string[];
    warrantyPeriod : number;
}

const productSchema : Schema<IProduct> = new Schema({
    title : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    specification : {
        type : String,
        required : true
    },
    categoryId : {
        type : Schema.Types.ObjectId,
        ref : 'Category',
        required : true
    },
    images : [{
        type : String, required : true
    }],
    mainImage : {
        type : String ,required : true
    },
brand : {
    type : String,required : true
},
model : {
    type : String,required : true
},
colours : [{
    type : String,required : true
}],
warrantyPeriod : {
    type : Number,required : true
}
})

export const Product : Model<IProduct> = mongoose.model<IProduct>("Product",productSchema)