const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const protect = async (req, res, next)=>{
        let token;

        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
               
            

                try{
                        token = req.headers.authorization.split(" ")[1]
                        console.log(process.env.JWT_SECRET)
                const decoded = jwt.verify(token, process.env.JWT_SECRET)
                
                console.log(decoded)

                // req.user = await User.findById(decoded.id).select('-password')
                
                }
                catch(err){
                        res.status(401)
                        console.log(err)
                        // throw new Error('Not authorized token failed')
                }
        }

        next()
}
module.exports = protect
