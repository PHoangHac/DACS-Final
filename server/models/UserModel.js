import mongoosee from "mongoose";
const UserSchema = new mongoosee.Schema(
  {
    username: {
      type: String,
      required: true, //truong bat buoc phai nhap
      unique: true, ////Check trong database co user nay chua
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoosee.model("Users", UserSchema);
