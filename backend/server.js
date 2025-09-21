const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "https://resumebuilder-3-b0v6.onrender.com",
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/auth", userRouter);
app.use("/api/resume", resumeRoutes);

// Serve uploads
app.use(
  "/uploads",
  express.static(path.join(_dirname, "uploads"))
);

// Health check
app.get("/", (req, res) => res.send("Server is running"));

// DB + server
connectDb()
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error(err));
