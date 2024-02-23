const express = require("express")
const router = express.Router()
const{register,login,getUserData} = require('../controllers/userControllers')
const authMidleware = require("../middlewar/authMidleware")



router.post("/register",register)
router.post("/login",login)
router.get('/',authMidleware, getUserData)


module.exports = router