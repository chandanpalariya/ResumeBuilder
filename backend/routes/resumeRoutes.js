import express from 'express'
import {protect } from "../middleware/authmiddleware.js"
import {createResume, deleteResume, getUserResume, getUserResumeById, updateResume} from "../controlers/resumecontroler.js"
import { uploadResumeImages } from '../controlers/uploadImage.js';


const resumeRouter=express.Router();

resumeRouter.post("/",protect,createResume)
resumeRouter.get("/",protect,getUserResume)
resumeRouter.get('/:id',protect,getUserResumeById)

resumeRouter.put("/:id",protect,updateResume)
resumeRouter.put("/:id/upload-images",protect,uploadResumeImages);

resumeRouter.delete("/:id",protect,deleteResume)

export default resumeRouter;