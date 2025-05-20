const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


const dbconn = require('./config/db');
const userRoutes = require('./Routes/userRoutes')

dbconn.sync().then(()=>{
    console.log('db synced successfully');
    
})

app.use(express.json())

app.use('/api/user', userRoutes)

const port = process.env.PORT

app.listen(port, ()=> {
    console.log(`server is running on the portr ${port}`)
})