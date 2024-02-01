const {User} = require('../db/index')

async function userMiddleware(req, res, next) {
    const username = req.headers.username
    const password  = req.headers.password

    let findUser = await User.findOne({
        username : username ,
        password : password
    })

    if(!findUser) {
        return res.status({
            status : false , 
            message : "USER DOES NOT EXIST"
        })
    }
    next();
}

module.exports = userMiddleware;