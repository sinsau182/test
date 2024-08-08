import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/user.js";

export default async function register(req,res){
const {name,email,password,category} = req.body;
try {
    const user = await User.findOne({email:email});
    if(user){
        res.status(409).send("user Already exists. Please Login");
    }
    else{
        try {
            const hash = await bcrypt.hash(password,13);
            const user  = new User({
                name,email,password:hash,category
            });
            const newUser = await user.save();
            res.status(200).send({id:currUser?._id,category:currUser?.category,name:currUser?.name});
        } catch (error) {
            res.status(501).send(error);
        }
        
    }
} catch (error) {
    console.log(error);
    res.send(error)
}
}