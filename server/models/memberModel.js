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
    profilePicture: String,
    type: {
      type: String,
      enum: ["admin", "member"],
      default: "member",
    },
  },
  { timestamps: true }
);

const MemberModel = mongoose.model("Members", MemberSchema);
export default MemberModel;
