const jwt = require('jsonwebtoken');

const token = jwt.sign(
    {
        id : 123,
        name : 'Fareedh'
    },
    "mysecretkey"
)

console.log("Token:",token);

const decode = jwt.verify(
    token,
    "mysecretkey"
);

console.log('Decoded Token :',decode)