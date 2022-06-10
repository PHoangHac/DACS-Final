import React, { useState, useEffect } from "react";
import "../updateUser/update.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const NewR = () => {
  const [files, setFiles] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [maxPeople, setMaxPeople] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

  const [categoryId, setCategoryId] = useState(undefined);

  const { data, loading } = useFetch("/category");

  const Nagigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      const listphoto = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/hoanghac/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      await axios.post(`/room/${categoryId}`, {
        title: title,
        price: price,
        status: status,
        maxPeople: maxPeople,
        area: area,
        address: address,
        desc: desc,
        photos: listphoto,
        type: type,
        categoryid: categoryId,
      });
      alert("Create Room successful !");
      Nagigate("/Admin/Room");
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(hotelId);

  return (
    <div className="container">
      <h3>Add New Room</h3>
      <div className="container-xl px-4 mt-4">
        <hr className="mt-0 mb-4"></hr>
        <div className="row">
          {/* piture-profile */}
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <form onSubmit={handleSumbit}>
                <div className="card-body text-center">
                  <img
                    className="img-account-profile rounded-circle mb-2"
                    src={
                      files
                        ? URL.createObjectURL(files[0])
                        : "https://i.pinimg.com/736x/c3/41/3f/c3413f7c697760db7608ee10e1e234fb.jpg"
                    }
                    alt="User image"
                  />

                  <div className="small font-italic text-muted mb-4">
                    JPG or PNG no larger than 5 MB
                  </div>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    multiple
                    onChange={(e) => {
                      setFiles(e.target.files);
                    }}
                  ></input>
                </div>
              </form>
            </div>
          </div>

          {/* Proflie-details */}
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Choose picture</div>
              <div className="card-body">
                <form onSubmit={handleSumbit}>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputTitle">
                      Title
                    </label>
                    <input
                      className="form-control"
                      id="inputTitle"
                      type="text"
                      placeholder="Enter title ...."
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPrice">
                        Price
                      </label>
                      <input
                        className="form-control"
                        id="inputPrice"
                        type="number"
                        placeholder="Enter price ...."
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputStatus">
                        Status
                      </label>
                      <input
                        className="form-control"
                        id="inputStatus"
                        type="text"
                        placeholder="Enter status ...."
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-12">
                      <label className="small mb-1" htmlFor="inputLocation">
                        Address
                      </label>
                      <input
                        className="form-control"
                        id="inputLocation"
                        type="text"
                        placeholder="Enter location ...."
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-5">
                      <label className="small mb-1" htmlFor="inputmaxPeople">
                        MaxPeople
                      </label>
                      <input
                        className="form-control"
                        id="inputmaxPeople"
                        type="number"
                        placeholder="Enter maxPeople ...."
                        onChange={(e) => {
                          setMaxPeople(e.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-7">
                      <label className="small mb-1" htmlFor="inputType">
                        Type
                      </label>
                      <input
                        className="form-control"
                        id="inputType"
                        type="text"
                        placeholder="Enter type ...."
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputArea">
                        Area
                      </label>
                      <input
                        className="form-control"
                        id="inputArea"
                        type="text"
                        placeholder="Enter Area ...."
                        onChange={(e) => {
                          setArea(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1 ms-2" htmlFor="featured">
                        Category
                      </label>
                      <select
                        id="hotelId"
                        onChange={(e) => setCategoryId(e.target.value)}
                        className="featured"
                      >
                        {loading
                          ? "loading..."
                          : data &&
                            data.map((val) => {
                              return (
                                <option key={val._id} value={val._id}>
                                  {val.type}
                                </option>
                              );
                            })}
                      </select>
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-12">
                      <label className="small mb-1" htmlFor="inputDesc">
                        Desc
                      </label>
                      <input
                        className="form-control"
                        id="inputDesc"
                        type="text"
                        placeholder="Enter descripton ...."
                        onChange={(e) => {
                          setDesc(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <button className="btn btn-primary">Create</button>
                  <Link id="back-link" className="float-end" to={"/Admin/Room"}>
                    Back
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewR;
