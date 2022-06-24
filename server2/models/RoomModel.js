import mongoose from "mongoose";
import Schema from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    userid: { type: Schema.Types.ObjectId, required: true, ref: "Users" },
  },
  {
    timestamps: true,
  }
);

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    username: {
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
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    bestChoice: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      required: true,
    },
    reviews: [ReviewSchema],
    categoryid: { type: Schema.Types.ObjectId, ref: "Category" },
    userid: { type: Schema.Types.ObjectId, ref: "Users" },
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
