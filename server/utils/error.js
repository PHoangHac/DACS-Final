import Users from "../models/UserModel.js";

export const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};

export const checkAuthSignUp = async (req, res, next) => {
  try {
    const checkEmail = await Users.findOne({ email: req.body.email });
    const checkUserName = await Users.findOne({ username: req.body.username });
    if (checkEmail) return res.status(409).json("email đã tồn tại");

    if (checkUserName) return res.status(409).json("username đã tồn tại");
    next();
  } catch (err) {
    return res.status(400).json(err);
  }
};
