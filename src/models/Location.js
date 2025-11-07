// src/models/Location.js
import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  touristId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tourist",
    required: true,
  },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Location = mongoose.model("Location", locationSchema);

export default Location;
