const mongoose = require("mongoose")

const hotalSchema = mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    des :{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    room:{
        type:[String]
    },
    
})

module.exports = mongoose.model("hotal",hotalSchema)