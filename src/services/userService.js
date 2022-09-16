const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.registerUser = async function registerUser(req,res){
    const {username,email,password,image} = req.body
    const userEmail = await User.findOne({email})
    if(userEmail){
        return res.status(400).json({error:"Este mail ya existe"})
    }
    const salt = await bcrypt.genSalt(10)
    const cryptedPassword = await bcrypt.hash(password,salt)
    const user = new User({
        username,
        email,
        password:cryptedPassword,
        image
    })
    let savedUser = await user.save()

    res.status(201).json(savedUser)
}

exports.loginUser = async function loginUser(req,res){
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({error:"Usuario no encontrado"})
    }
    const validPassword = await bcrypt.compare(password,user.password)
    if(!validPassword){
        return res.status(400).json({error:"Contraseña incorrecta"})
    }
    return res.status(200).json(user)
}

exports.getUserById = async function getUserById(req,res){
    const id = req.params.id
    const user = await User.findById(id)
    if (user) return res.status(200).json(user)
    return res.status(400).json({error:"Id invalida"})
}

exports.getAllUsers = async function getAllUsers(req,res){
    const users = await User.find()
    return res.json(users)
}

exports.getUserByEmail = async function getUserByEmail(req,res){
    const email = req.params.email
    const user = await User.findOne({email})
    if (user) return res.json(user)
    return res.status(400).json({error:"No se encontro un usuario con este email"})

}



