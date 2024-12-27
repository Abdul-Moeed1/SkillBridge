const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/SkillBridge").then(()=>{
    console.log("DB connection Sucessful");
}).catch((e)=>{
    console.log("Cant connect to DB Error : ", e);
    
})