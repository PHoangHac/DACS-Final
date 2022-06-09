import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    area: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
    },
    rating: {
      type: Number,
      max: 5,
      min: 0,
    },
    bestChoice: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
