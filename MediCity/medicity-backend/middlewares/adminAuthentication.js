import jwt from 'jsonwebtoken'


//admin authentication middleware
const adminAuth = async (req, res, next) => {
    console.log("inside jwt middleware")
    try{
        const {atoken} = req.headers
        console.log(atoken);
        
        if(!atoken){
            return res.json({success:false, message:"USER Not Authorized. Please Login Again...!"})
        }
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)
             if(token_decode !== process.env.EMAIL_ADMIN + process.env.PASSWORD_ADMIN) {
                   return res.json({success:false, message:"USER Not Authorized. Please Login As ADMIN"})
             }
             next()
       }
       catch(error){
            console.log(error)
            res.json({success:false, message:error.message})
       }
}

export default adminAuth;