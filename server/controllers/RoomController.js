import Room from "../models/RoomModel.js";
import Category from "../models/CategoryModel.js";
import Users from "../models/UserModel.js";

export const createRoom = async (req, res, next) => {
  const categoryId = req.params.categoryid;
  const UserID = req.params.userid;
  const newRoom = new Room(req.body);

  try {
    const saveRoom = await newRoom.save();
    try {
      await Category.findByIdAndUpdate(categoryId, {
        $push: { rooms: saveRoom._id },
      });
      await Users.findByIdAndUpdate(UserID, {
        $push: { roomsUser: saveRoom._id },
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
  try {
    const room = await Room.findById(req.params.id);

    if (req.user.isAdmin || room.username === req.body.username) {
      await Category.findOneAndUpdate(
        { _id: room.categoryid },

        {
          $pull: { rooms: req.params.id },
        }
      );
      await Users.findOneAndUpdate(
        { _id: room.userid },

        {
          $pull: { roomsUser: req.params.id },
        }
      );
      await room.deleteOne();
      return res.status(200).json("Delete Room successfull !");
    } else {
      res.status(401).json("You can delete only your room! !");
    }
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
