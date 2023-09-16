import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendOtp } from "../utils/mobileOtp.js";
import DemberModel from "../models/demberModel.js";

function generateOTP() {
  // Generate a random 6-digit number
  const min = 100000; // Minimum value (inclusive)
  const max = 999999; // Maximum value (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Register new user
export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPass;
  const newUser = new UserModel(req.body);
  const { mobile } = req.body;
  try {
    // addition new
    const oldUser = await UserModel.findOne({ mobile });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    // changed
    const user = await newUser.save();
    const token = jwt.sign(
      { mobile: user.mobile, id: user._id },
      process.env.JWTKEY,
      { expiresIn: "1h" }
    );

    const otp = generateOTP();
    console.log(user.mobile, otp);
    const response = await sendOtp(user.mobile, otp);

    // update otp by finding user by id

    const finalUser = await UserModel.findByIdAndUpdate(
      user._id,
      { otp: otp },
      { new: true }
    );
    res.status(200).json({ finalUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Login User

// Changed
export const loginUser = async (req, res) => {
  const { mobile, password } = req.body;

  try {
    const user = await UserModel.findOne({ mobile: mobile });

    if (!user) res.status(404).json("User not found");
    if (user.status === "Pending") res.status(404).json("User not verified");

    const validity = await bcrypt.compare(password, user.password);

    if (!validity) res.status(400).json("wrong password");

    const token = jwt.sign(
      { mobile: user.mobile, id: user._id },
      process.env.JWTKEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const checkOtp = async (req, res) => {
  const { mobile, otp } = req.body;
  console.log(mobile,otp);
  const user = await UserModel.findOne({ mobile: mobile });
  console.log(user);
  if (user?.otp === otp) {
    const finalUser = await UserModel.findByIdAndUpdate(
      user._id,
      { status: "Verified" },
      { new: true }
    );
    res.status(200).json({ finalUser });
  } else {
    res.status(400).json({ message: "Wrong OTP" });
  }
};

// Register new user
export const registerMember = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPass;
  const newMember = new MemberModel(req.body);
  const { rotaractID } = req.body;
  try {
    // addition new
    const oldMember = await DemberModel.findOne({ rotaractID });

    if (oldMember)
      return res.status(400).json({ message: "Member already exists" });

    // changed
    const member = await newMember.save();
    const token = jwt.sign(
      { rotaractID: member.rotaractID, id: member._id },
      process.env.JWTKEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ member, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login User

// Changed
export const loginMember = async (req, res) => {
  const { rotaractID, password } = req.body;

  try {
    const member = await DemberModel.findOne({ rotaractID: rotaractID });

    if (member) {
      const validity = await bcrypt.compare(password, member.password);

      if (!validity) {
        res.status(400).json("wrong password");
      } else {
        const token = jwt.sign(
          { member: member.rotaractID, id: member._id },
          process.env.JWTKEY,
          { expiresIn: "1h" }
        );
        res.status(200).json({ member, token });
      }
    } else {
      res.status(404).json("Member not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
