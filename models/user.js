const mongoose =require('mongoose')

mongoose.connect("mongodb://localhost:27017/mini")
const userSchema = mongoose.Schema({
    name:String,
    username:String,
    email:String,
    age:Number,
    password:String,
    profilepic:{
        type:String,
        default:"default.png"
    },
    posts:[
        {
            type: mongoose.Schema.Types.ObjectId, ref :"post"
        }
    ]
}) 

module.exports =mongoose.model("user",userSchema);