import axios from "axios";
import { isInRiskZone } from "../utils/geoFence.js";

export const checkSafety = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
      return res.status(400).json({ message: "Latitude and longitude are required" });
    }

    const risk = isInRiskZone(latitude, longitude);
    res.status(200).json({
      message: risk ? "⚠️ You are in a risk zone!" : "✅ You are in a safe zone.",
      risk,
    });
  } catch (error) {
    console.error("Error in safety check:", error);
    res.status(500).json({ message: "Server error" });
  }
};
