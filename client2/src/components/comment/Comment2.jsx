import React, { useContext, useState, useEffect, useCallback } from "react";
import "./comment.scss";
import { AuthContext } from "../../contexts/AuthContext";
// import useFetch from "../../hooks/useFetch";
import Rating from "../roomlist/Rating";
import moment from "moment";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { RatingStartsReview } from "../../data/Rating.js";

const Comment2 = () => {
  const { user } = useContext(AuthContext);
  // const { data } = useFetch(`/room`);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  const [dataComment, setDataComment] = useState([]);

  console.log(dataComment);

  const FilterRoom = useCallback(async () => {
    let Rooms = await axios.get(`/room/${id}`);
    setReviews(Rooms.data.reviews);
    setDataComment(Rooms);
  }, [id]);

  useEffect(() => {
    FilterRoom();
  }, [FilterRoom]);

  const CreateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/room/reviews/${id}`, {
        username: user.username,
        rating,
        comment,
        userid: user._id,
      });
    } catch (err) {
      console.log(err);
    }
    FilterRoom();
  };

  //   let listRating = RatingStartsReview.map((val) => {
  //     return (
  //       <option key={val.id} value={val.value}>
  //         {val.label}
  //       </option>
  //     );
  //   });

  return (
    <div className="card border-primary mt-3" style={{ borderradius: "15px" }}>
      <div className="card-body p-4">
        <div className="text-black text-center ">
          <div className="badge bg-success text-wrap fs-4">Comment</div>
        </div>
        <div className="border-bottom border-primary border-2 mt-3"></div>
        {user ? (
          <>
            {reviews.length === 0 ? (
              <div className="text-center mt-2">No Comment</div>
            ) : (
              <div id="comment-sroll" className="list-grou mt-3 pe-2">
                {reviews.map((val) => {
                  return (
                    <div
                      className="list-group-item  list-group-item-action mb-3 border-top shadow bg-body rounded border-info border-1"
                      key={val._id}
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="">{val.username}</h5>
                        <small className="text-muted">
                          {moment(val.createdAt).startOf("hour").fromNow()}
                        </small>
                      </div>
                      <Rating
                        id="rating-comment"
                        value={val.rating}
                        className="mt-1"
                      />
                      <p className="mb-1">{val.comment}</p>
                    </div>
                  );
                })}
              </div>
            )}

            <div>
              <form onSubmit={CreateSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label mt-3 fs-5"
                  >
                    Rating
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                  >
                    <option value="" hidden>
                      Select rating
                    </option>
                    <option value="1">1- Bad</option>
                    <option value="2">2- Fair</option>
                    <option value="3">3- Good</option>
                    <option value="4">4- Very good</option>
                    <option value="5">5- Excelent</option>
                    {/* {listRating} */}
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label fs-5"
                  >
                    Text
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="text-black text-center mt-3">
            <div className="badge bg-danger text-wrap  fs-5">
              Please login to comment
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment2;
