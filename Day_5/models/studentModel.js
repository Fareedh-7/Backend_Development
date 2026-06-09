const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required'],
        minlength : 3
    },
    age : {
        type : Number,
        required : [true, 'Age is required'],
        min : [0, 'Invalid Age'],
        max : [140, 'Invalid Age']
    }
})

module.exports = mongoose.model('Students',studentSchema)