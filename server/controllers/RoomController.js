import Room from "../models/RoomModel.js";
import Category from "../models/CategoryModel.js";

export const createRoom = async (req, res, next) => {
  const categoryId = req.params.categoryid;
  const newRoom = new Room(req.body);

  try {
    const saveRoom = await newRoom.save();
    try {
      await Category.findByIdAndUpdate(categoryId, {
        $push: { rooms: saveRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(saveRoom);
    // console.log(categoryId);
  } catch (err) {
    next(err);
  }
};

export const UpdateRoom = async (req, res, next) => {
  try {
    const updateRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateRoom);
  } catch (err) {
    //   res.status(500).json(err);
    next();
  }
};

export const DeleteRoom = async (req, res, next) => {
  const categoryId = req.params.categoryid;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Category.findByIdAndUpdate(categoryId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Delete Room successfull !");
  } catch (err) {
    next();
  }
};

export const GetOneRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    //   res.status(500).json(err);
    next(err);
  }
};

export const GetAllRoom = async (req, res, next) => {
  const { ...other } = req.query;
  try {
    const AllRooms = await Room.find({
      ...other,
    }).limit(req.query.limit);
    res.status(200).json(AllRooms);
  } catch (err) {
    next(err);
    // res.status(500).json(err);
  }
};

// export const getRoomSuggestion = async (req, res, next) => {
//   const suggestion = req.query;
//   try {
//     const Rooms = await Room.find({
//       suggestion,
//     }).limit(req.query.limit);
//     res.status(200).json(Rooms);
//   } catch (err) {
//     next(err);
//     // res.status(500).json(err);
//   }
// };
