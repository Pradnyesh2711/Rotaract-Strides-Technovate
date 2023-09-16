import mongoose from "mongoose";

const MemberSchema = mongoose.Schema(
  {
    rotaractID: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    club: {
      type: String,
      required: true,
    },
    profilePicture: String,
    type: {
      type: String,
      enum: ["admin", "member"],
      default: "member",
    },
  },
  { timestamps: true }
);

const Member2Model = mongoose.model("Members", MemberSchema);
export default Member2Model;
