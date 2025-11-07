// src/routes/touristRoutes.js
import express from "express";
import Tourist from "../models/Tourist.js";

const router = express.Router();

// Create new tourist (register)
router.post("/register", async (req, res) => {
  try {
    const tourist = new Tourist(req.body);
    await tourist.save();
    res.status(201).json({ message: "Tourist registered successfully", tourist });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Fetch all tourists
router.get("/all", async (req, res) => {
  try {
    const tourists = await Tourist.find();
    res.status(200).json(tourists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
