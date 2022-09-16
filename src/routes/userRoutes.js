const {Router} = require('express')
const userService = require('../services/userService')

const userRouter = Router()

userRouter.post("/register",userService.registerUser)
userRouter.post("/login",userService.loginUser)
userRouter.get("/:id",userService.getUserById)
userRouter.get("/",userService.getAllUsers)
userRouter.get("/email/:email",userService.getUserByEmail)


module.exports = userRouter;