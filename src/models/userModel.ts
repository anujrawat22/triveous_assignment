import mongoose , {Schema , Document} from "mongoose";

export interface IUser extends Document {
    username : string;
    email  : string;
    password : string;
    contact : number;
    roles : string[];
}

export enum UserRole {
    ADMIN = "admin",
    USER = "user"
}

const userSchema : Schema = new Schema({
    username : {type : String,required : true},
    email : {type : String , required : true},
    password : {type : String, required : true},
    contact : {type : Number, required : true},
    roles : {type : String , enum : Object.values(UserRole) , default : UserRole.USER}
})


export const User = mongoose.model<IUser>('User',userSchema)