
const {UserModel} = require('../models')
const sendEmail = require('../utils/SendEmail')
const bcrypt = require('bcrypt')
const crypto = require('crypto')



exports.createUser = async (req, res) => {

    const {fullName,email,password} = req.body
try {
    // check if the email is already registered   and is va
    const ExistingUser = await UserModel.findOne({where:{email}})

    const hashpass = await bcrypt.hash(password, 10)

    const token =  crypto.randomBytes(32).toString('hex');

    

    const user = await UserModel.create({
        fullName,
        email,
        password: hashpass,
        token,
        isVerified: false,})

    const message = `${process.env.BASE_URL}/verify/${user.id}/${user.token}`


     sendEmail(user.email , 'verify your account' , message)

    res.json({message: 'User created successfully', user})

} catch (error) {

    console.log('error occured', error);
    
}

} 

exports.verifyEmail = async (req, res) => {


    const {id, token} = req.body

    try {

        const user = await UserModel.findByPk(id)
        if(!user) {
            return res.json({message: 'user not found'})
        }

        const token = await UserModel.findOne({token: user.token})

        if(!token) {
            return res.json({message: 'token not found'})
        }
            await UserModel.findOne({isVerified:true})
            await UserModel.findOne({token: null})

            res.json({message: 'user is verified succesfully'})
       
    } catch (error) {
        
    }
}