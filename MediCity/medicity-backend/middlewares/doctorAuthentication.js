import jwt from 'jsonwebtoken'


//admin authentication middleware
const doctorAuth = async (req, res, next) => {
    console.log("inside jwt middleware")
    try{
        const {dtoken} = req.headers
        console.log(dtoken);
        
        if(!dtoken){
            return res.json({success:false, message:"USER Not Authorized. Please Login Again...!"})
        }
        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)
             
            req.body.doctorId = token_decode.id
             next()
       }
       catch(error){
            console.log(error)
            res.json({success:false, message:error.message})
       }
}

export default doctorAuth;