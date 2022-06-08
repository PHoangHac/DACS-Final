import React, { useState, useEffect } from "react";
// import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaCloudUploadAlt } from "react-icons/fa";
import "../admin.scss";
import moment from "moment";
import axios from "axios";

const CategoriesAdmin = () => {
  // const { data, loading } = useFetch("/category");

  const [listCate, setListCate] = useState([]);

  const displayAllCate = async () => {
    axios.get("/category").then((res) => {
      setListCate(res.data);
      // console.log(res);
    });
  };

  const deleteCate = async (id) => {
    axios.delete(`/category/${id}`).then((res) => {
      displayAllCate();
      // console.log(res);
    });
  };

  useEffect(() => {
    displayAllCate();
  }, []);

  return (
    <div className="container">
      <div className="badge bg-primary text-wrap fs-4 mb-3">All Category</div>
      <div className="badge bg-light text-wrap fs-6 mb-3 ms-5">
        <Link id="newuser-user" to={"/Admin/NewCategory"}>
          New Category
        </Link>
      </div>
      <div className="table-responsive bg-light table-scrolls">
        <table className="table table-hover table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Tên loại</th>
              <th scope="col">Type</th>
              <th scope="col">Featured</th>
              <th scope="col">Hình</th>
              <th scope="col">Khởi tạo lúc</th>
              <th scope="col">Cập nhập lúc</th>
              <th scope="col">Hành Động</th>
            </tr>
          </thead>
          <tbody id="tbody-user">
            {listCate.map((value) => {
              return (
                <tr key={value._id}>
                  {/* <th className="counterCell" scope="row"></th> */}
                  <td></td>
                  <td>{value.name}</td>
                  <td>{value.type}</td>
                  <td>{value.featured.toString()}</td>
                  <td>
                    <img src={value.img} alt="" className="images-category" />
                  </td>
                  <td>
                    {moment(value.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                  </td>
                  <td>
                    {moment(value.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
                  </td>
                  <td>
                    <Link to={`/Admin/UpdateCategory/${value._id}`}>
                      <FaCloudUploadAlt id="update_user" />
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <FaTrashAlt
                      onClick={() => deleteCate(value._id)}
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

export default CategoriesAdmin;
