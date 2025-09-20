import fs from "fs";
import path from "path";
import Resume from "../models/resumeModel.js";
import upload from "../middleware/uploadMiddlleware.js";

export const uploadResumeImages = async (req, res) => {
  try {
    const resumeId = req.params.id;
    const resume = await Resume.findOne({ _id: resumeId, userId: req.user._id });

    if (!resume) {
      return res.status(404).json({ message: "resume not found or unauthorized" });
    }

    const uploadFolder = path.join(process.cwd(), "uploads");
    const baseUrl = `${req.protocol}://${req.get("host")}`;

    const newThumbnail = req.files?.thumbnail?.[0];
    const newProfileImage = req.files?.profileImage?.[0];

    if (newThumbnail) {
      if (resume.thumbnailLink) {
        const oldThumbnail = path.join(uploadFolder, path.basename(resume.thumbnailLink));
        if (fs.existsSync(oldThumbnail)) fs.unlinkSync(oldThumbnail);
      }
      resume.thumbnailLink = `${baseUrl}/uploads/${newThumbnail.filename}`;
    }

    if (newProfileImage) {
      if (resume.profileInfo?.profilePreviewUrl) {
        const oldProfile = path.join(uploadFolder, path.basename(resume.profileInfo.profilePreviewUrl));
        if (fs.existsSync(oldProfile)) fs.unlinkSync(oldProfile);
      }
      resume.profileInfo.profilePreviewUrl = `${baseUrl}/uploads/${newProfileImage.filename}`;
    }

    await resume.save();

    res.status(200).json({
      message: "images uploaded successfully",
      thumbnailLink: resume.thumbnailLink,
      profilePreviewUrl: resume.profileInfo.profilePreviewUrl,
    });

  } catch (error) {
    console.error("error uploading images:", error);
    res.status(500).json({
      message: "failed to upload the images",
      error: error.message,
    });
  }
};
