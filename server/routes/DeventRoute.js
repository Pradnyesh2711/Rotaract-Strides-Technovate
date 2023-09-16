import express from "express";
import deventModel from "../models/deventModel.js";

const router = express.Router();

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
