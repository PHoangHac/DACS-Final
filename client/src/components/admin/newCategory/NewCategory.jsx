import React, { useState } from "react";
import "../newUser/newuser.scss";
import axios from "axios";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

const NewCategory = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [featured, setFeatured] = useState(false);
  const [file, setFile] = useState("");

  // const Navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();

    const newCate = {
      name,
      type,
      featured,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      try {
        const uploadRes = await axios.post("/upload-single", data);
        newCate.img = uploadRes.data;
      } catch (err) {}
    }

    try {
      const res = await axios.post("/category", newCate);
      // alert("Create Category Successfull !");
      // Navigate("/Admin/Category");
      toast.success(res.data, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      });
      toast.info(CustomToastWithLink, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 20000,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const CustomToastWithLink = () => (
    <div>
      <Link to="/Admin/Category">Click here back to List</Link>
    </div>
  );

  const handleChange = (e) => {
    setFeatured(e.target.value);
  };

  return (
    <div className="container">
      <h3 className="badge bg-success text-wrap fs-4 ms-4 ">
        Add New Category
      </h3>
      <div className="container-xl px-4 mt-4">
        <hr className="mt-0 mb-4"></hr>
        <div className="row">
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header fs-5">Category Image</div>
              <form onSubmit={handleSumbit}>
                <div className="card-body text-center">
                  <img
                    className="img-account-profile rounded-circle mb-2"
                    src={
                      file
                        ? URL.createObjectURL(file)
                        : "https://i.pinimg.com/736x/c3/41/3f/c3413f7c697760db7608ee10e1e234fb.jpg"
                    }
                    alt="Userimage"
                  />

                  <div className="small font-italic text-muted mb-4">
                    JPG or PNG no larger than 5 MB
                  </div>

                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    onChange={(e) => setFile(e.target.files[0])}
                  ></input>
                </div>
              </form>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header fs-5">Category Details</div>
              <div className="card-body">
                <form onSubmit={handleSumbit}>
                  <div className="mb-3">
                    <label
                      className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary"
                      htmlFor="inputName"
                    >
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
                      <label
                        className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary"
                        htmlFor="inputType"
                      >
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

                    <div className="col-md-2">
                      <label
                        className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary ms-2"
                        htmlFor="featured"
                      >
                        Featured
                      </label>
                      <select
                        className="form-control"
                        id="featured"
                        onChange={handleChange}
                        style={{ lineHeight: "1.7rem" }}
                      >
                        <option hidden>Select Option</option>
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
      <ToastContainer />
    </div>
  );
};

export default NewCategory;
