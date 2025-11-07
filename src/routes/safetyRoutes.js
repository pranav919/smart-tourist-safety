import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/check", async (req, res) => {
  const { latitude, longitude } = req.body;

  try {
    // Dummy example — you can add your real geofencing logic later
    const isInRiskZone = latitude > 25.3 && latitude < 25.4 && longitude > 82.9 && longitude < 83.0;

    res.json({
      message: isInRiskZone ? "⚠️ You are in a risk zone!" : "✅ You are safe.",
      risk: { inRisk: isInRiskZone },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
