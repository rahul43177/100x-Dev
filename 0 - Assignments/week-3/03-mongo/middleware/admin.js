
const {Admin} = require('../db/index')
// Middleware for handling auth

async function adminMiddleware(req, res, next) {
   const username = req.headers.username
   const password = req.headers.password
   
   let adminCheck = await Admin.findOne({
        username : username , 
        password : password
   })

   if(!adminCheck) {
    return res.status(403).json({
        status : false , 
        message : "USER DOES NOT EXIST"
    })
   }
   next();

}

module.exports = adminMiddleware;