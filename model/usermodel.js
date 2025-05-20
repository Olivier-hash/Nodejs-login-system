
const { DataTypes } = require('sequelize')


const dbconn = require('../config/db');

const Users = dbconn.dbconn.define('users',{
    fullName: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            len:[5]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate: {
            isEMail:true
        }

    },
    password: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[8]
        }
    }
})

module.exports = Users;