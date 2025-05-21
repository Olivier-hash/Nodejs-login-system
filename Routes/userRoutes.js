
const {createUser, verifyEmail} = require('../controller/userController')

const express = require('express');


const Router = express.Router();

Router.post('/', createUser)
Router.post('/verify/:id/:token ', verifyEmail)

module.exports = Router