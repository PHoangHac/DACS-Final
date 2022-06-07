import React, { useState, useEffect } from "react";
import "../newUser/newuser.scss";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateCate = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [featured, setFeatured] = useState(false);

  const { id } = useParams();
  const Navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/category/${id}`, {
        name: name,
        type: type,
        featured: featured,
      });
      alert("Update category Successfull !");
      Navigate("/Admin/Category");
    } catch (err) {
      console.log(err);
    }
  };

  const getCateById = async () => {
    const getdata = await axios.get(`/category/${id}`);
    setImg(getdata.data.img);
    setName(getdata.data.name);
    setType(getdata.data.type);
    setFeatured(getdata.data.featured);
  };

  useEffect(() => {
    getCateById();
  }, []);

  const handleChange = (e) => {
    setFeatured(e.target.value);
  };

  return (
    <div className="container">
      <h3>Update Category</h3>
      <div className="container-xl px-4 mt-4">
        <hr className="mt-0 mb-4"></hr>
        <div className="row">
          {/* piture-profile */}
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Choose Picture</div>
              <form onSubmit={handleSumbit}>
                <div className="card-body text-center">
                  <img
                    className="img-account-profile rounded-circle mb-2"
                    src={img}
                    alt="User image"
                  />

                  <div className="small font-italic text-muted mb-4">
                    JPG or PNG no larger than 5 MB
                  </div>

                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    onChange={(e) => setImg(e.target.files[0])}
                  ></input>
                </div>
              </form>
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      // value="username"
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
                        value={type}
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

                  <button className="btn btn-primary">Update</button>
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

export default UpdateCate;
