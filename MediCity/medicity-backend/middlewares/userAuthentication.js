import jwt from 'jsonwebtoken'


//admin authentication middleware
const userAuth = async (req, res, next) => {
    console.log("inside jwt middleware")
    try{
        const {token} = req.headers
        console.log(token);
        
        if(!token){
            return res.json({success:false, message:"USER Not Authorized. Please Login Again...!"})
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
             
            req.body.userId = token_decode.id
             next()
       }
       catch(error){
            console.log(error)
            res.json({success:false, message:error.message})
       }
}

export default userAuth;