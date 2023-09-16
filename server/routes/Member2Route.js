import express from "express";
import Member2Model from "../models/member2Modal";

const router = express.Router();

router.get("/getAdmins", async (req, res) => {
  console.log("Hello");
  try {
    const admins = await Member2Model.find({ type: "admin" });
    res.status(200).json({ admins: admins });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});
export default router;
