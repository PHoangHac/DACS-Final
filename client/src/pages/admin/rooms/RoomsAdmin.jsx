import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaCloudUploadAlt } from "react-icons/fa";
import "../admin.scss";
import moment from "moment";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const RoomsAdmin = () => {
  const [listRoom, setListRoom] = useState([]);

  const displayAllRoom = async () => {
    axios.get("/room").then((res) => {
      setListRoom(res.data);
    });
  };

  const deleteRoom = async (id) => {
    axios.delete(`/room/delete/${id}`).then((res) => {
      toast.success(res.data, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      });
      displayAllRoom();
    });
  };

  useEffect(() => {
    displayAllRoom();
  }, []);

  const PL = "http://localhost:7070/images/";

  return (
    <div className="container">
      <div className="badge bg-primary text-wrap fs-4 mb-3">All Post</div>
      <div className="badge bg-light text-wrap fs-6 mb-3 ms-5">
        <Link id="newuser-user" to={"/Admin/NewRoom"}>
          New post
        </Link>
      </div>
      <div className="table-responsive bg-light table-scrolls ">
        <table className="table table-hover table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Location</th>
              <th scope="col">Status</th>
              <th scope="col">Max People</th>
              <th scope="col">Area</th>
              <th scope="col">User name</th>
              <th scope="col">Description</th>
              <th scope="col">Images</th>
              <th scope="col">BestChoice</th>
              <th scope="col">Type Room</th>
              <th scope="col">Create At</th>
              <th scope="col">Update At</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody id="tbody-user">
            {listRoom.map((value) => {
              return (
                <tr key={value._id} className="fw-bold">
                  {/* <th className="counterCell" scope="row"></th> */}
                  <td></td>
                  <td>{value.title}</td>
                  <td>{value.price}</td>
                  <td>{value.address}</td>
                  <td>{value.status}</td>
                  <td>{value.maxPeople}</td>
                  <td>{value.area}</td>
                  <td>{value.username}</td>
                  <td id="descripton">{value.desc}</td>
                  <td>
                    <img
                      src={PL + value.photos[0]}
                      alt=""
                      className="images-category"
                    />
                    <img
                      src={PL + value.photos[1]}
                      alt=""
                      className="images-category"
                    />
                    <img
                      src={PL + value.photos[2]}
                      alt=""
                      className="images-category"
                    />
                  </td>
                  <td>{value.bestChoice.toString()}</td>
                  <td>{value.type}</td>
                  <td>
                    {moment(value.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                  </td>
                  <td>
                    {moment(value.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
                  </td>
                  <td>
                    <Link to={`/Admin/UpdateRoom/${value._id}`}>
                      <FaCloudUploadAlt id="update_user" />
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <FaTrashAlt
                      onClick={() => deleteRoom(value._id)}
                      id="delete_user"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RoomsAdmin;
