
const {Sequelize} = require('sequelize');

const dbconn = new Sequelize("Test_db","","", {
    host: "localhost",
    dialect: "mysql"
})

const checkdb = async () => {
    try {
        await dbconn.authenticate();
        console.log('db connencted successfully');
        
    } catch (error) {
           console.log('error', error);
                 
    }
}
checkdb();

module.exports = dbconn;   // exports default connection