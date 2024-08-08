import User from "../models/user.js";
import bcrypt from "bcrypt"

export default async function login(req,res){
const {email,password} = req.body;
try {
   const currUser =  await User.findOne({email:email});
   if(currUser){
    try {
        
        const isCorrectPassword = await bcrypt.compare(password,currUser.password);
        if(isCorrectPassword){
        res.status(200).send({id:currUser?._id,category:currUser?.category,name:currUser?.name});
        }else{
            res.status(401).send("Invalid username or password");
        }
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
   }
   else{
    res.status(404).send("User dosesn't exist. Please signup")
   }
} catch (error) {
    res.status(500).send("Something went wrong");
}
}