import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaCloudUploadAlt } from "react-icons/fa";
import "../admin.scss";
import moment from "moment";
import axios from "axios";

const RoomsAdmin = () => {
  const [listRoom, setListRoom] = useState([]);

  const displayAllRoom = async () => {
    axios.get("/room").then((res) => {
      setListRoom(res.data);
    });
  };

  const deleteRoom = async (id) => {
    axios.delete(`/room/delete/${id}`).then((res) => {
      displayAllRoom();
    });
  };

  useEffect(() => {
    displayAllRoom();
  }, []);

  return (
    <div className="container">
      <div className="badge bg-primary text-wrap fs-4 mb-3">All Room</div>
      <div className="badge bg-light text-wrap fs-6 mb-3 ms-5">
        <Link id="newuser-user" to={"/Admin/NewRoom"}>
          New Room
        </Link>
      </div>
      <div className="table-responsive bg-light table-scrolls ">
        <table className="table table-hover table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Tiêu Đề</th>
              <th scope="col">Giá</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Số lượng người ở</th>
              <th scope="col">Diện tích</th>
              <th scope="col">Mô tả</th>
              <th scope="col">Hình</th>
              <th scope="col">Ưu thích</th>
              <th scope="col">Thuộc loại</th>
              <th scope="col">Khởi tạo lúc</th>
              <th scope="col">Cập nhập lúc</th>
              <th scope="col">Hành Động</th>
            </tr>
          </thead>
          <tbody id="tbody-user">
            {listRoom.map((value) => {
              return (
                <tr key={value._id}>
                  {/* <th className="counterCell" scope="row"></th> */}
                  <td></td>
                  <td>{value.title}</td>
                  <td>{value.price}</td>
                  <td>{value.address}</td>
                  <td>{value.status}</td>
                  <td>{value.maxPeople}</td>
                  <td>{value.area}</td>
                  <td>{value.desc}</td>
                  <td>
                    <img
                      src={value.photos[0]}
                      alt=""
                      className="images-category"
                    />
                    <img
                      src={value.photos[1]}
                      alt=""
                      className="images-category"
                    />
                    <img
                      src={value.photos[2]}
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
    </div>
  );
};

export default RoomsAdmin;
