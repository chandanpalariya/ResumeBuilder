import Resume from "../models/resumeModel.js";
import fs from "fs";
import path from "path";
import mongoose from "mongoose";

// Create resume
export const createResume = async (req, res) => {
  try {
    const { title } = req.body;

    // default template
    const defaultResumeData = {
      profileInfo: {
        profileImg: null,
        previewUrl: "",
        fullName: "",
        designation: "",
        summary: "",
      },
      contactInfo: {
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        github: "",
        website: "",
      },
      workExperience: [
        {
          company: "",
          role: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
      education: [
        {
          degree: "",
          institution: "",
          startDate: "",
          endDate: "",
        },
      ],
      skills: [
        {
          name: "",
          progress: 0,
        },
      ],
      projects: [
        {
          title: "",
          description: "",
          github: "",
          liveDemo: "",
        },
      ],
      certifications: [
        {
          title: "",
          issuer: "",
          year: "",
        },
      ],
      languages: [
        {
          name: "",
          progress: 0,
        },
      ],
      interests: [""],
    };

    const newResume = await Resume.create({
      userId: req.user._id,
      title,
      ...defaultResumeData,
      ...req.body,
    });

    res.status(201).json(newResume);
  } catch (error) {
    console.error("Error creating resume:", error.message);
    res
      .status(500)
      .json({ message: "failed to create a resume", error: error.message });
  }
};

// Get all resumes of a user
export const getUserResume = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user._id }).sort({
      updatedAt: -1,
    });
    res.json(resumes);
  } catch (err) {
    console.error("Error fetching resumes:", err.message);
    res
      .status(500)
      .json({ message: "failed to get resumes", error: err.message });
  }
};

// Get resume by id
export const getUserResumeById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid resume ID" });
    }

    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json(resume);
  } catch (error) {
    console.error("Error fetching resume by id:", error.message);
    res
      .status(500)
      .json({ message: "failed to get resume", error: error.message });
  }
};

// Update resume
export const updateResume = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid resume ID" });
    }

    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!resume) {
      return res
        .status(404)
        .json({ message: "resume not found or not authorized" });
    }

    // merge updated data
    Object.assign(resume, req.body);

    // save updated resume
    const savedResume = await resume.save();
    res.json(savedResume);
  } catch (err) {
    console.error("Error updating resume:", err.message);
    res
      .status(500)
      .json({ message: "failed to update the resume", error: err.message });
  }
};

// Delete resume
export const deleteResume = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid resume ID" });
    }

    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!resume) {
      return res
        .status(404)
        .json({ message: "resume not found or not authorized" });
    }

    // path to uploads folder
    const uploadsFolder = path.join(process.cwd(), "uploads");

    // delete thumbnail if exists
    if (resume.thumbnailLink) {
      const oldThumbnail = path.join(
        uploadsFolder,
        path.basename(resume.thumbnailLink)
      );
      if (fs.existsSync(oldThumbnail)) {
        fs.unlinkSync(oldThumbnail);
      }
    }

    // delete profile image if exists
    if (resume.profileInfo?.profilePreviewedUrl) {
      const oldProfile = path.join(
        uploadsFolder,
        path.basename(resume.profileInfo.profilePreviewedUrl)
      );
      if (fs.existsSync(oldProfile)) {
        fs.unlinkSync(oldProfile);
      }
    }

    // delete the resume document
    const deleted = await Resume.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!deleted) {
      return res
        .status(404)
        .json({ message: "resume not found or not authorized" });
    }

    res.json({ message: "resume deleted successfully" });
  } catch (error) {
    console.error("Error deleting resume:", error.message);
    res
      .status(500)
      .json({ message: "failed to delete resume", error: error.message });
  }
};
