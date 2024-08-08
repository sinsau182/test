import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:process.env.CLIENT,
    methods:["GET","POST"]
}))
app.get("/",async(req,res)=>{
    res.send("Working");
});
import loginRoute from "./routes/login.js"
app.use("/login",loginRoute);
import registerRoute from "./routes/register.js"
app.use("/register",registerRoute);
const connectDB = async()=>{
    try {     
    const res = await mongoose.connect(`${process.env.MONGOURL}retryWrites=true&w=majority&appName=Cluster0`)
    console.log("Connected to DB");
    } catch (error) {
       console.log("Error  in connecting to DB"); 
    }
}
connectDB();
app.listen(5000,(req,res)=>{
    console.log("Server is running at port 5000");
})