import express from "express";
import deventModel from "../models/deventModel.js";

const router = express.Router();

router.post("/addEvent", async (req, res) => {
  try {
    // Create new Event
    console.log(req.body);

    const newEvent = new deventModel(req.body);
    // Save new Event
    const savedEvent = await newEvent.save();
    // Send response
    res.status(200).json(savedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/getEvents", async (req, res) => {
  const { city } = req.body;
  try {
    const gcity = await deventModel.find({ city });
    res.status(200).json(gcity);
  } catch (error) {
    res.status(500).json(error);
  }
});
export default router;
