
const userModel = require('../model/usermodel')


exports.createUser = async (req, res) => {

    const {fullName,email,password} = req.body
try {
    // check if the email is already registered
    const Extinguisheruser = await userModel.findOne({where:{email}})

    const hashpass = await bcrypt.hash(password, 10)

    const user = await userModel.create({fullName,email,password})

    res.json({message: 'User created successfully', user})
} catch (error) {
    console.log('error occured', error);
    
}

} 