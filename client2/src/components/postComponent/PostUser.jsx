import React, { useState, useContext } from "react";
import "../../components/admin/updateUser/update.scss";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../contexts/AuthContext";

const PostUser = () => {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [maxPeople, setMaxPeople] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

  const { id } = useParams();

  const [categoryId, setCategoryId] = useState(undefined);
  // const [categoryName, setCategoryName] = useState("");

  const { user } = useContext(AuthContext);

  const { data } = useFetch("/category");

  const Nagigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      price,
      username: user.username,
      status,
      maxPeople,
      area,
      address,
      type,
      desc,
      categoryid: categoryId,
      userid: id,
    };

    const listphoto = await Promise.all(
      Object.values(file).map(async (file) => {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("MultipleFiles", file);
        const uploadRes = await axios.post("/upload-multiple", data);

        return uploadRes.data;
      })
    );

    newPost.photos = listphoto;

    // console.log(listphoto);

    try {
      await axios.post(`/room/${categoryId}/${id}`, newPost);
      // alert("Create Room successful !");
      Nagigate(`/MyPost/${user._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(categoryId);
  // console.log(categoryName);

  let list = data.map((val) => {
    return (
      <option key={val._id} value={[val._id, val.type]}>
        {val.type}
      </option>
    );
  });

  return (
    <div className="container">
      <h3 className="mt-4 badge bg-primary text-wrap fs-4">Add New Post</h3>
      <div className="container-xl px-4 mt-4">
        <hr className="mt-0 mb-4"></hr>
        <div className="row">
          {/* piture-profile */}
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header fs-5">Room Picture</div>
              <form onSubmit={handleSumbit}>
                <div className="card-body text-center">
                  <img
                    className="img-account-profile rounded mb-2"
                    alt="UserImage"
                    src={
                      file
                        ? URL.createObjectURL(file[0])
                        : "https://i.pinimg.com/736x/c3/41/3f/c3413f7c697760db7608ee10e1e234fb.jpg"
                    }
                  />

                  <div className="small font-italic text-muted mb-4">
                    JPG or PNG no larger than 5 MB
                  </div>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    name="MultipleFiles"
                    multiple
                    onChange={(e) => {
                      setFile(e.target.files);
                    }}
                  ></input>
                </div>
              </form>
            </div>
          </div>

          {/* Proflie-details */}
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header fs-5">Room infomation</div>
              <div className="card-body">
                <form onSubmit={handleSumbit}>
                  <div className="mb-3">
                    <label
                      className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary"
                      htmlFor="inputTitle"
                    >
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
                      required
                    />
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label
                        className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary"
                        htmlFor="inputPrice"
                      >
                        Price
                      </label>
                      <input
                        className="form-control"
                        id="inputPrice"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="Enter price ...."
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label
                        className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary"
                        htmlFor="inputStatus"
                      >
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
                        required
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-12">
                      <label
                        className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary"
                        htmlFor="inputLocation"
                      >
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
                        required
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-5">
                      <label
                        className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary"
                        htmlFor="inputmaxPeople"
                      >
                        MaxPeople
                      </label>
                      <input
                        className="form-control"
                        id="inputmaxPeople"
                        type="number"
                        min="0"
                        placeholder="Enter maxPeople ...."
                        onChange={(e) => {
                          setMaxPeople(e.target.value);
                        }}
                        required
                      />
                    </div>

                    <div className="col-md-7">
                      <label
                        className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary"
                        htmlFor="inputType"
                      >
                        Type Room
                      </label>
                      <input
                        className="form-control"
                        id="inputType"
                        type="text"
                        disabled
                        placeholder="Please select an item below"
                        value={type}
                        // placeholder="Enter type ...."
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label
                        className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary"
                        htmlFor="inputArea"
                      >
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
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary ms-2"
                        htmlFor="featured"
                      >
                        Category
                      </label>
                      <select
                        id="hotelId"
                        onChange={(e) => {
                          setCategoryId(e.target.value.split(",")[0]);
                          setType(e.target.value.split(",")[1]);
                        }}
                        className="featured"
                      >
                        <option hidden>Please select Type</option>
                        {list}
                      </select>
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-12">
                      <label
                        className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary"
                        htmlFor="inputDesc"
                      >
                        Desc
                      </label>
                      <textarea
                        style={{ height: "7rem" }}
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
                  <Link id="back-link" className="float-end" to={"/"}>
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

export default PostUser;
