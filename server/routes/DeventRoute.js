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

router.post("/getByCity", async (req, res) => {
  const city = req.body.city;
  console.log(city);
  try {
    if (city === "empty") {
      let events = await deventModel.find();
      res.status(200).json(events);
    } else {
      let events = await deventModel.find({ city });
      res.status(200).json(events);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/getByClub", async (req, res) => {
  const club = req.body.club;
  try {
    let events = await deventModel.find({ club });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
