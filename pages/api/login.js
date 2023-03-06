import connect from "../../lib/mongodb";
import User from '../../model/schema'

connect()

export default async function handler(req,res){
    const {email,password,usertype}=req.body
    const user = await User.findOne({email,password,usertype})
        if(!user){
            return res.json({status:"user not found"})
        }
        else{
            res.json({status:"user found"})
        }
}