import React from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaCloudUploadAlt } from "react-icons/fa";
import "../admin.scss";
import moment from "moment";

const RoomsAdmin = () => {
  const { data, loading } = useFetch("/room");

  return (
    <div className="container">
      <div className="badge bg-primary text-wrap fs-4 mb-3">All Room</div>
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
                        <Link to={"/Admin/UpdateRoom"}>
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

export default RoomsAdmin;
