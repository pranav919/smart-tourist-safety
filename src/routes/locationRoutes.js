import express from "express";
import Location from "../models/Location.js";
import Tourist from "../models/Tourist.js";

const router = express.Router();

// Save tourist location
router.post("/update", async (req, res) => {
  try {
    const { touristId, latitude, longitude } = req.body;
    if (!touristId || !latitude || !longitude) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Save location in DB
    const location = new Location({ touristId, latitude, longitude });
    await location.save();
// Geo-fence risk zone check
const risk = isInRiskZone(latitude, longitude);
if (risk.inRisk) {
  console.log(`⚠️ ALERT: Tourist ${touristId} entered ${risk.zone}`);
}

    // Update tourist's current location
    await Tourist.findByIdAndUpdate(touristId, { currentLocation: `${latitude}, ${longitude}` });

    res.status(200).json({ message: "Location updated successfully", location });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get location history for a tourist
router.get("/:touristId", async (req, res) => {
  try {
    const locations = await Location.find({ touristId: req.params.touristId }).sort({ timestamp: -1 });
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
