import mongoose from "mongoose";

const EventSchema = mongoose.Schema(
  {
    title: {
        type: String,
        required: true,
      },
    description: {
      type: String,
      required: true,
    },
    date: {
        type: Date,
        required: true,
      },
    location:{
        type:location,
        required:true,
    },
    EventImage: String,
    type: {
      type: String,
      enum: ["admin", "member"],
      default: "member",
    },
  },
  { timestamps: true }
);

const eventModel = mongoose.model("Events", EventSchema);
export default eventModel;
