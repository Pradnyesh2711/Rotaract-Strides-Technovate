import express from "express";
// import MemberModel from "../models/memberModel";

  

const router = express.Router();

router.post("/admin",async (req, res) => {
    const type=req.body.type;
    console.log(type);
      try {
        let admins = await MemberModel.find({type});
        admins = admins.map((admin)=>{
          const {password, ...otherDetails} = admin._doc
          return otherDetails
        })
        res.status(200).json(admins);
      } catch (error) {
        res.status(500).json(error);
        console.log(error);
      }
    });
export default router;
