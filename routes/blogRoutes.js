const express = require("express")
const router = express.Router()
const {addBlog,getBlogs,deleteBlog,updatBlog} = require ('../controllers/blogControllers')
const authMidleware = require("../middlewar/authMidleware")



router.post("/addblog" , authMidleware , addBlog)
router.get("/getblogs" , authMidleware , getBlogs)
router.put("/updateblog/:id" , authMidleware , updatBlog)
router.delete("/deleteblog/:id" , authMidleware , deleteBlog)


module.exports = router