const express = require('express');

const app = express();

const userRoute = require('./routes/authRoutes')

const database = require('./config/db')

database();

app.use(express.json());

app.use('/profile',userRoute)

app.listen(3000,()=>{
    console.log('Server Started')
})