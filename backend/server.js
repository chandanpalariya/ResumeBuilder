import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const app = express();
const PORT = process.env.PORT || 8000; // Render uses env PORT

// Middleware
app.use(
  cors({
    origin: "https://resumebuilder-3-b0v6.onrender.com", // your frontend URL
    credentials: true, // allow cookies
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", userRouter);
app.use("/api/resume", resumeRoutes);

// Serve uploads folder
app.use("/uploads", express.static(path.join(_dirname, "uploads")));

// Health check
app.get("/", (req, res) => res.send("Server is running"));

// Connect DB & start server
connectDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to connect DB", err);
  });
