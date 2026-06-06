const validation = (req,res,next) => {

    const {name,age} = req.body

    if(!name){
        return res.status(400).json({
            message : "Name is requires"
        })
    }

    if(name.length < 3){
        return res.status(400).json({
            message: "Enter a Valid Name"
        })
    }

    if(typeof name !== "string"){
        return res.status(400).json({
            message : "Name must be a string"
        })
    }

    if(!age){
        return res.status(400).json({
            message : "Age is required"
        })
    }

    if(age < 0 || age > 150){
        return res.status(400).json({
            message : "Enter a Valid Age"
        })
    }

    if(typeof age !== "number"){
        return res.status(400).json({
            message : "Age must be number"
        })
    }

    next();
}

module.exports = validation