const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title :{
        type: String,
        required : true
    },
    description:{
        type : String,
        required : true
    },
    author:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    createAt : { type : Date,
        default: new Date()
    }


})

const Blog = mongoose.model('blog', blogSchema)
module.exports = Blog