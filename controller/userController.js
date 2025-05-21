
const userModel = require('../model/usermodel')


exports.createUser = async (req, res) => {

    const {fullName,email,password} = req.body
try {
    // check if the email is already registered
    const Extinguisheruser = await userModel.findOne({where:{email}})

    const hashpass = await bcrypt.hash(password, 10)

    const token = await crypto.randomBytes(32).toString('hex');

    const message = `${process.env.BASE_URL}/verify/${user.token}`

    const user = await userModel.create({fullName,email,password})

    res.json({message: 'User created successfully', user})

} catch (error) {

    console.log('error occured', error);
    
}

} 

exports.verifyEmail = async (req, res) => {


    const {id, token} = req.body

    try {

        const user = await userModel.findByPk(id)
        if(!user) {
            return res.json({message: 'user not found'})
        }

        const token = await userModel.findOne({token: user.token})

        if(!token) {
            return res.json({message: 'token not found'})
        }
            await userModel.findOne({isVerified:true})
            await userModel.findOne({token: null})

            res.json({message: 'user is verified succesfully'})
       
    } catch (error) {
        
    }
}