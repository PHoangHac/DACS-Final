//import framework, modules
import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const CreateUser = async (req, res, next) => {
  //Su dung framwork bcrypt de ma hoa(bam) password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const newUser = new Users({
      //Lay tat ca cac thuoc tinh trong model user
      ...req.body,
      password: hash,
    });

    const user = await newUser.save();
    // res.send("User has been created !");
    return res.status(200).json("User has been created !");
  } catch (err) {
    // console.log(err);
    next(err);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const user = await Users.findOne({ username: req.body.username });
    if (!user) return res.status(409).json("User not found !");
    // next(createError(400, "Không tìm thấy tài khoản"));

    //Su dung compare de ma hoa nguoc lai
    const CorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!CorrectPassword)
      return res.status(409).json("Wrong password and username !");
    // next(createError(400, "Sai mật khẩu và tài khoản !"));

    //khoi tao variable token
    //su dung sign trong jsonwebtoken - payload len id va isAdmin
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY
    );

    const { password, isAdmin, ...otherDetails } = user._doc;

    //Luu vao cookie mot access_token va chi duoc lay du lieu
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ details: { ...otherDetails, isAdmin }, isAdmin });
  } catch (err) {
    next(err);
  }
};

// export const logout = async (req, res, next) => {
//   res.clearCookie("access_token");
//   res.redirect("/");
// };
