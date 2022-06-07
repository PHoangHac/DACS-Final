import React, { useState } from "react";
import "../newUser/newuser.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const NewCategory = () => {
  const [file, setFileS] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [featured, setFeatured] = useState(false);

  const Navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      // const uploadRes = await axios.post(
      //   "https://api.cloudinary.com/v1_1/hoanghac/image/upload",
      //   data
      // );
      // // console.log(uploadRes.data);
      // const { url } = uploadRes.data;

      await axios.post("http://localhost:7070/api/category", {
        name: name,
        type: type,
        // img: url,
        featured: featured,
      });
      alert("Create Category Successfull !");
      Navigate("/Admin/Category");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFeatured(e.target.value);
  };

  return (
    <div className="container">
      <h3>Create New Category</h3>
      <div className="container-xl px-4 mt-4">
        <hr className="mt-0 mb-4"></hr>
        <div className="row">
          {/* piture-profile */}
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Choose Picture</div>
              {/* <form onSubmit={handleSumbit}> */}
              <div className="card-body text-center">
                <img
                  className="img-account-profile rounded-circle mb-2"
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : "https://scr.vn/wp-content/uploads/2020/08/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-camera.jpg"
                  }
                  alt="Category image"
                />

                <div className="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>

                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={(e) => setFileS(e.target.files[0])}
                ></input>
              </div>
              {/* </form> */}
            </div>
          </div>

          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form onSubmit={handleSumbit}>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputName">
                      Name
                    </label>
                    <input
                      className="form-control"
                      id="inputName"
                      type="text"
                      placeholder="Enter name category...."
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputType">
                        Type
                      </label>
                      <input
                        className="form-control"
                        id="inputType"
                        type="text"
                        placeholder="Enter type...."
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1 ms-2" htmlFor="featured">
                        Featured
                      </label>
                      <select id="featured" onChange={handleChange}>
                        <option value={false}>False</option>
                        <option value={true}>True</option>
                      </select>
                    </div>
                  </div>

                  <button className="btn btn-primary">Create</button>
                  <Link
                    id="back-link"
                    className="float-end"
                    to={"/Admin/Category"}
                  >
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

export default NewCategory;
