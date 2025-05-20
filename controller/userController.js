
const userModel = require('../model/usermodel')


exports.createUser = async (req, res) => {

    const {fullName,email,password} = req.body
try {
    const user = await userModel.create({fullName,email,password})
    res.json({message: 'User created successfully', user})
} catch (error) {
    console.log('error occured', error);
    
}

}