// src/models/Tourist.js
import mongoose from "mongoose";

const touristSchema = new mongoose.Schema({
  name: { type: String, required: true },
  passportNumber: { type: String, required: true, unique: true },
  nationality: { type: String, required: true },
  contactNumber: { type: String, required: true },
  tripStartDate: { type: Date, required: true },
  tripEndDate: { type: Date, required: true },
  emergencyContact: { type: String, required: true },
  currentLocation: { type: String, default: "Not Available" },
  status: { type: String, default: "Active" }, // e.g. Active, Missing, Completed
});

const Tourist = mongoose.model("Tourist", touristSchema);

export default Tourist;
