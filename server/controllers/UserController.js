import Users from "../models/UserModel.js";
//import modules

export const UpdateUser = async (req, res, next) => {
  try {
    //query
    const updateUser = await Users.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    //   res.status(500).json(err);
    next();
  }
};

export const DeleteUser = async (req, res, next) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json("Delete User successfull !");
  } catch (err) {
    //   res.status(500).json(err);
    next();
  }
};

export const GetOneUser = async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    //   res.status(500).json(err);
    next(err);
  }
};

//arrow function + export
export const getAllUser = async (req, res, next) => {
  try {
    //cu phap find lay tat ca du lieu trong bang user
    const allUser = await Users.find();
    //tra ve trang thai (200 -- success)
    //tra variale allUser thanh json
    res.status(200).json(allUser);
  } catch (err) {
    next(err);
    // console.log(err);
  }
};
