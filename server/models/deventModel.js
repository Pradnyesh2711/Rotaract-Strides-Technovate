import mongoose from "mongoose";

const EventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "Marathon",
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    contactEmail: {
      type: String,
      required: true,
    },
    // path: [
    //   {
    //     latitude: {
    //       type: Number,
    //       required: true,
    //     },
    //     longitude: {
    //       type: Number,
    //       required: true,
    //     },
    //   },
    // ],
    club: {
      type: String,
      required: true,
    },
    coverImage: [String],
    eventImage: [String],
  },
  { timestamps: true }
);

const deventModel = mongoose.model("Events", EventSchema);
export default deventModel;
