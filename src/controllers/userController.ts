import { Request,Response } from "express"
import { User } from "../models/userModel";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const signup = async(req : Request,res : Response)=>{
    try {
      
        const { username, email,contact, password, roles } = req.body;
    
        const existingUser = await User.findOne({ email });
    
        if (existingUser) {
          return res.status(400).send({ msg: "User already exists" });
        }
    
        const hash = await bcrypt.hash(password, 5);
    
        const user =  new User({ email, username, password: hash, contact : +contact,roles});
    
        await user.save();
    
        res.status(201).send({ msg: "Registration successful" });
      } catch (error) {
        console.log("Error", error);
        res.status(500).send({ msg: "Failed to create User" });
      }
}


export const login = async(req : Request, res : Response)=>{
    try {
        const { email , password } = req.body;
       
        const user = await User.findOne({email})
    
        if(!user){
            return res.status(404).send({msg : "User doesn't exist, Please login"})
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password); 
    
        if (!isPasswordValid) {
            return res.status(401).json({ msg: 'Invalid credentials' });
          }
    
    
          const token = jwt.sign({ userId: user._id, username: user.username, roles: user.roles }, process.env.SECRET_KEY);
          res.cookie('token',token)
          res.status(201).send({msg : "Login Successful" , token})
      } catch (error) {
        console.log("Login error", error);
        res.status(500).send({ msg: "Failed to login User" });
      }
}