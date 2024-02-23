const Blog = require ('../models/blog')


//@desc blog add role: user
//@methode post path:/blog/addblog
const addBlog = async (req, res)=>{
    try{
    const {title ,description} = req.body
    const userId = req.body.userId
    const newBlog= await Blog.create({title,description,author:userId})
    res.status(201).json({msg:"blog created", Blog :newBlog})
}
    catch(err){
        res.status(500).json({msg:"something went wrong", err: err.message})
    }
}
//@desc blog find role: user
//@methode post path:/blog/getblogs
const getBlogs = async(req,res)=>{
    try {
        const blogs= await Blog.find({author: req.body.userId})
        res.status(200).json({msg:"get all blogs",blogs:blogs})
    }
    catch(err){
        res.status(500).json({msg:"something went wrong",err:err.message})
    }
}

//@desc blog delete role: user
//@methode post path:/blog/deleteblog
const deleteBlog = async (req,res) =>{
    try {
        const blog = await Blog.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({msg: "Blog deleted",blog: blog})
    } catch (err){
        res.status(500).json({msg:"something went wrong",err:err.message})
    }
}
//@desc blog update role: user
//@methode post path:/blog/updateblog
const updatBlog =  async (req,res)  =>{
    try {
        const blog = await Blog.findByIdAndUpdate({_id:req.params.id},{...req.body})
        res.status(200).json({msg: "blog updated",blog: blog})
    } catch (err){
        res.status(500).json({msg: err.message})
    }
}

module.exports = {addBlog,getBlogs,deleteBlog,updatBlog}