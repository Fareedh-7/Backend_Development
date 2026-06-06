const express = require('express');

const app = express();

const studentRoute = require('./Routes/studentRoute')

app.use(express.json());

app.use('/students',studentRoute);

app.listen(3000,()=>{
    console.log('Server Started');
})