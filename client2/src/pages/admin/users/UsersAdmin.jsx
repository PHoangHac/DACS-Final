import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import "../admin.scss";
import moment from "moment";
import axios from "axios";

const UsersAdmin = () => {
  const [listUser, setListUser] = useState([]);

  const displayAllUser = async () => {
    axios.get("/user").then((res) => {
      setListUser(res.data);
      // console.log(res);
    });
  };

  const deleteUser = async (id) => {
    axios.delete(`/user/${id}`).then((res) => {
      displayAllUser();
      // console.log(res);
    });
  };

  useEffect(() => {
    displayAllUser();
  }, []);

  return (
    <div className="container">
      <div className="badge bg-primary text-wrap fs-4 mb-3">All User</div>
      <div className="badge bg-light text-wrap fs-6 mb-3 ms-5">
        <Link id="newuser-user" to={"/Admin/NewUser"}>
          New User
        </Link>
      </div>
      <div className="table-responsive bg-light ">
        <table className="table table-hover table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Tên tài khoản</th>
              <th scope="col">Mật khẩu</th>
              <th scope="col">Họ</th>
              <th scope="col">Tên</th>
              <th scope="col">Admin ?</th>
              <th scope="col">Hình</th>
              <th scope="col">Email</th>
              <th scope="col">Điện thoại</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Khởi tạo lúc</th>
              <th scope="col">Cập nhập lúc</th>
              <th scope="col">Hành Động</th>
            </tr>
          </thead>
          <tbody id="tbody-user">
            {listUser.map((value) => {
              return (
                <tr key={value._id}>
                  {/* <th className="counterCell" scope="row"></th> */}
                  <td></td>
                  <td>{value.username}</td>
                  <td>{value.password}</td>
                  <td>{value.lastName}</td>
                  <td>{value.firstName}</td>
                  <td>{value.isAdmin.toString()}</td>
                  <td>
                    <img src={value.img} alt="" className="images-category" />
                  </td>
                  <td>{value.email}</td>
                  <td>{value.phone}</td>
                  <td>{value.address}</td>
                  <td>
                    {moment(value.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                  </td>
                  <td>
                    {moment(value.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
                  </td>
                  <td>
                    <Link to={`/Admin/UpdateUser/${value._id}`}>
                      <FaRegEdit id="update_user" />
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <FaTrashAlt
                      onClick={() => deleteUser(value._id)}
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

export default UsersAdmin;
