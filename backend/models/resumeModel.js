import mongoose from "mongoose";
const ResumeSchema=new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    title:{
        type:String,
        required:true
    }  ,
    thumbnailLink:{
        type:String,

    },

    profileInfo:{
       profilePreviewUrl: String,
       fullName:String,
       designation:String,
       summary:String,
    },
   contactInfo:{
    email:String,
    phone:String,
    location:String,
    linkedin:String,
    github:String,
    website:String,
   },
   
   //work experience
   workExperience:[
   {
    company:String,
    role:String,
    startDate:String,
    endDate:String,
    description:String,
   },
],
education:[
    {
        degree:String,
        institution:String,
        startDate:String,
        endDate:String,

    }
   ],

   skills:[
    {
        name:String,
        progress:String,


    }
   ],

   projects:[
    {
        title:String,
        description:String,
        github:String,
        liveDemo:String,

    } 
   ],

   certification:[
    {
        title:String,
        issuer:String,
        year:String,
    }
   ],

   languages:[
    {
        name:String,
        progress:String,

    }
   ],
 
   interest:[
    String
],
},
   
{timestamps:{createdAt:"createAt",updatedAt:"updatedAt"}}

)

export default mongoose.model("resume",ResumeSchema)