import express from "express";
import DemberModel from "../models/demberModel.js";

const router = express.Router();

router.get("/getAdmins", async (req, res) => {
  try {
    const admins = await DemberModel.find({ type: "admin" });
    res.status(200).json({ admins: admins });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

router.get("/getAllMembers", async (req, res) => {
  try {
    const members = await DemberModel.find();
    res.status(200).json({ members });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

export default router;
