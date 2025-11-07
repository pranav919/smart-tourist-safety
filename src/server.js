import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import 'dotenv/config';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ Basic route for testing
app.get("/", (req, res) => {
  res.send("Smart Tourist Safety backend is running...");
});

// ✅ Use safety routes
app.use("/api/safety", safetyRoutes);

const PORT = process.env.PORT || 5000;
import safetyRoutes from "./routes/safetyRoutes.js";
app.use("/api/safety", safetyRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`URL: http://localhost:${PORT}`);
});
