import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
//import framework

//import modules
import authRouter from "./routes/Auth.js";
import userRouter from "./routes/User.js";
import categoryRouter from "./routes/Category.js";
import roomRouter from "./routes/Rooms.js";

//Use env
dotenv.config();

const app = express();

//connect to mongoDB
const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Connect to Database successfull !");
  } catch (err) {
    console.log(err);
  }
};

ConnectDB();

//Create PORT
const PORT = process.env.PORT || 7080;

//middlewares
app.use(cors());
app.use(cookieParser());
// Calling the express.json() method for parsing
//convert data to json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/room", roomRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on : ${PORT}`);
});
