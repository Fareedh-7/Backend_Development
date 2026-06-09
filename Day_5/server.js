const express = require('express');

const app = express();

const database = require('./config/db');

database();

const studentRoute = require('./routers/studentRoute');

app.use(express.json());

app.use('/students',studentRoute);

app.listen(3000,()=>{
    console.log('Server Started')
})