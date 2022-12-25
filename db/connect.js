const mongoose = require("mongoose");
const db = "mongodb+srv://Abhishek:Anand106@cluster0.eoyffou.mongodb.net/loginApp?retryWrites=true&w=majority"
mongoose.connect(db,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }, ()=>{
        console.log("Connected to MongoDB");
    });
