import mongoose from 'mongoose'

export const connectDb=async(req,res)=>{
    await mongoose.connect('mongodb+srv://ex-chandan:chandan2006@cluster0.10rsh.mongodb.net/myfirstproject')
    .then(()=>console.log('mongodb connected succesfully'))
    .catch((err)=>console.log('some error ocured during connection'))
}