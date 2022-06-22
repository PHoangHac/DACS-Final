import Category from "../models/CategoryModel.js";
import Room from "../models/RoomModel.js";

export const createCategory = async (req, res, next) => {
  //variable newHotel thu thap du lieu tu nguoi dung gui len server
  const newCategory = new Category(req.body);
  // console.log(newHotel);
  try {
    const saveCategory = await newCategory.save();
    // res.status(200).json(saveCategory);
    return res.status(200).json("Create category successfull !");
    // console.log(saveHotel);
  } catch (err) {
    next(err);
    //res.status(500).json(err);
  }
};

export const UpdateCategory = async (req, res, next) => {
  try {
    const updateCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // res.status(200).json(updateCategory);
    return res.status(200).json("Update category successfull !");
  } catch (err) {
    //   res.status(500).json(err);
    next();
  }
};

export const DeleteCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json("Delete category successfull !");
  } catch (err) {
    //   res.status(500).json(err);
    next();
  }
};

export const GetOneCategory = async (req, res, next) => {
  try {
    const hotel = await Category.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    //   res.status(500).json(err);
    next(err);
  }
};

export const GetAllCategory = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }

  // const { min, max, ...others } = req.query;
  // try {
  //   const hotels = await Category.find({
  //     ...others,
  //     cheapestPrice: { $gt: min | 1, $lt: max || 999 },
  //   }).limit(req.query.limit);
  //   res.status(200).json(hotels);
  // } catch (err) {
  //   next(err);
  // }
};

export const GetAll = async (req, res, next) => {
  try {
    const getAllRoom = await Category.findById(req.params.id);
    const list = await Promise.all(
      getAllRoom.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
