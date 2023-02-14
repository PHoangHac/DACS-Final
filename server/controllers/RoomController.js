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
      res.status(404).json("Some thing error !");
      next(err);
    }
    // res.status(200).json(saveRoom);
    return res.status(200).json("Create Room successfull !");
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

    // res.status(200).json(updateRoom);
    return res.status(200).json("Update Room successfull !");
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

export const createPostReview = async (req, res, next) => {
  const { rating, comment } = req.body;

  const Post = await Room.findById(req.params.id);

  try {
    // if (Post) {
    //   const alreadyReviewed = Post.reviews.find(
    //     (r) => r.user.toString() === req.user._id.toString()
    //   );

    //   if (alreadyReviewed) {
    //     res.status(400);
    //     throw new Error("Post already reviewed");
    //   }

    const review = {
      username: req.body.username,
      rating: Number(rating),
      comment,
      userid: req.body.userid,
    };

    Post.reviews.push(review);

    Post.numReviews = Post.reviews.length;

    Post.rating =
      Post.reviews.reduce((acc, item) => item.rating + acc, 0) /
      Post.reviews.length;

    await Post.save();
    res.status(201).json({ message: "Review added" });
    // } else {
    //   res.status(404);
    //   throw new Error("Post not found");
    // }
  } catch (err) {
    next(err);
  }
};

//Like Post
export const PutLike = async (req, res, next) => {
  try {
    // const UserID = req.user._id;
    const Post = await Room.findByIdAndUpdate(
      req.body.postid,
      {
        $push: { like: req.body._id },
      },
      {
        new: true,
      }
    );

    return res.status(200).json(Post);
  } catch (err) {
    next(err);
  }
};

//Unlike
export const PutUnlike = async (req, res, next) => {
  try {
    // const UserID = req.params.userid;
    const Post = await Room.findByIdAndUpdate(
      req.body.postid,
      {
        $pull: { like: req.user._id },
      },
      {
        new: true,
      }
    );

    return res.status(200).json(Post);
  } catch (err) {
    next(err);
  }
};

//Count visit post
export const PutVisitorPost = async (req, res, next) => {
  try {
    const VisitRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $inc: { numVisit: 1 } },
      { new: true }
    );

    // res.status(200).json(updateRoom);
    return res.status(200).json(VisitRoom);
  } catch (err) {
    //   res.status(500).json(err);
    next(err);
  }
};
