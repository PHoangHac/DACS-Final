import React, { useState, useEffect, useCallback } from "react";
import "../newUser/newuser.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateCate = () => {
  const [files, setFiles] = useState("");
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [featured, setFeatured] = useState(false);

  const { id } = useParams();
  // const Navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      const filename = Date.now() + files?.name;
      data.append("name", filename);
      data.append("file", files);

      const uploadRes = await axios.post("/upload-single", data);

      const res = await axios.put(`/category/${id}`, {
        name: name,
        type: type,
        featured: featured,
        img: files ? uploadRes.data : img,
      });
      // alert("Update category Successfull !");
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

  const getCateById = useCallback(async () => {
    const getdata = await axios.get(`/category/${id}`);
    setImg(getdata.data.img);
    setName(getdata.data.name);
    setType(getdata.data.type);
    setFeatured(getdata.data.featured);
  }, [id]);

  useEffect(() => {
    getCateById();
  }, [getCateById]);

  const handleChange = (e) => {
    setFeatured(e.target.value);
  };

  const PL = "http://localhost:7070/images/";

  return (
    <div className="container">
      <h3 className="badge bg-success text-wrap fs-4 ms-4">Update Category</h3>
      <div className="container-xl px-4 mt-4">
        <hr className="mt-0 mb-4"></hr>
        <div className="row">
          {/* piture-profile */}
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header fs-5">Category Image</div>
              <form onSubmit={handleSumbit}>
                <div className="card-body text-center">
                  <img
                    className="img-account-profile rounded-circle mb-2"
                    src={files ? URL.createObjectURL(files) : PL + img}
                    alt="Userimage"
                  />

                  <div className="small font-italic text-muted mb-4">
                    JPG or PNG no larger than 5 MB
                  </div>

                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    onChange={(e) => setFiles(e.target.files[0])}
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      // value="username"
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
                        value={type}
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
                        id="featured"
                        onChange={handleChange}
                        style={{ lineHeight: "1.7rem" }}
                        className="form-control"
                      >
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
      <ToastContainer />
    </div>
  );
};

export default UpdateCate;
