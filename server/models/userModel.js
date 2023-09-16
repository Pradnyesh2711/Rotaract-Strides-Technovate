import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pin: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
    otp: {
      type: String,
      default: null,
    },
    cords: {
      type: Object,
      default: null,
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
