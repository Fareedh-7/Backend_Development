const bcrypt = require('bcryptjs')

const test = async() => {
    const hash = await bcrypt.hash("123456",10);

    console.log(hash)

    const compare = await bcrypt.compare("123456",hash);
    console.log(compare)
} 

module.exports = test

test();