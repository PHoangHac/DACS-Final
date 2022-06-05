import React from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaCloudUploadAlt } from "react-icons/fa";
import "../admin.scss";
import moment from "moment";

const UsersAdmin = () => {
  const { data, loading } = useFetch("/user");

  return (
    <div className="container">
      <div className="badge bg-primary text-wrap fs-4 mb-3">All User</div>
      <div className="table-responsive bg-light ">
        <table className="table table-hover table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Tên tài khoản</th>
              <th scope="col">Mật khẩu</th>
              <th scope="col">Email</th>
              <th scope="col">Điện thoại</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Khởi tạo lúc</th>
              <th scope="col">Cập nhập lúc</th>
              <th scope="col">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              "loading..."
            ) : (
              <>
                {data.map((value) => {
                  return (
                    <tr key={value._id}>
                      {/* <th className="counterCell" scope="row"></th> */}
                      <td></td>
                      <td>{value.username}</td>
                      <td>{value.password}</td>
                      <td>{value.email}</td>
                      <td>{value.phone}</td>
                      <td>{value.address}</td>
                      <td>
                        {moment(value.createdAt).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </td>
                      <td>
                        {moment(value.updatedAt).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </td>
                      <td>
                        <Link to={"/Admin/UpdateUser"}>
                          <FaCloudUploadAlt />
                        </Link>
                        &nbsp;&nbsp;&nbsp;
                        <FaTrashAlt />
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersAdmin;
