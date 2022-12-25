const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");

const app=express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

require("./db/connect.js")
const userSchema=new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String
    }
)
const User = new mongoose.model("User",userSchema);
const port= process.env.PORT || 5000
//ROUTES
app.get("/login",(req,res)=>{
    res.send("LOGIN");
    const {email, password} = req.body;
    User.findOne({email:email},(err,user)=>{
        if(user)
        {
            if(password === user.password)
            res.send({message:"Login Sucessfull", user:user})
            else
            res.send({message:"Invalid Password"})
        }
        else
        res.send({message:"User not registered"})
    })
})
app.get("/register",(req,res)=>{
    res.send("REGISTER");
    const {name, email, password} = req.body;
    User.findOne({email:email},(err,user)=>{
        if(user)
            res.send({message:"User already registered. Please login now"})
        else
            {
                const user = new User({
                    name, email, password
                })
                user.save(err=>{
                    if(err)
                    res.send(err)
                    else
                    res.send({message:"Registered Successfully"})
                })
            }
    })

})
app.listen(port,(req,res)=>{
        console.log("Backend started")
    })