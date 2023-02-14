import React, { useState, useEffect } from "react";
import "../updateUser/update.scss";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
// import { AuthContext } from "../../../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";

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

  const [userID, setUserID] = useState(undefined);
  const [userName, setUserName] = useState("");

  const [categoryId, setCategoryId] = useState(undefined);

  // const { user } = useContext(AuthContext);

  // console.log(userID);
  // console.log(userName);

  const { data } = useFetch("/category");

  const [listUser, setListUser] = useState([]);

  const displayAllUser = async () => {
    axios.get("/user").then((res) => {
      setListUser(res.data);
      // console.log(res);
    });
  };

  useEffect(() => {
    displayAllUser();
  }, []);

  // console.log(listUser);

  // const Nagigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      price,
      username: userName,
      status,
      maxPeople,
      area,
      address,
      type,
      desc,
      categoryid: categoryId,
      userid: userID,
    };

    const listphoto = await Promise.all(
      Object.values(files).map(async (file) => {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("MultipleFiles", file);
        const uploadRes = await axios.post("/upload-multiple", data);

        return uploadRes.data;
      })
    );

    newPost.photos = listphoto;
    try {
      const res = await axios.post(`/room/${categoryId}/${userID}`, newPost);
      // alert("Create Room successful !");
      toast.success(res.data, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      });
      toast.info(CustomToastWithLink, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 20000,
      });
      // Nagigate("/Admin/Room");
    } catch (err) {
      console.log(err);
    }
  };

  const CustomToastWithLink = () => (
    <div>
      <Link to="/Admin/Room">Click here back to List</Link>
    </div>
  );

  let list = data.map((val) => {
    return (
      <option key={val._id} value={[val._id, val.type]}>
        {val.type}
      </option>
    );
  });

  let SelectedUser = listUser.map((val) => {
    return (
      <option key={val._id} value={[val._id, val.username]}>
        {val.username}
      </option>
    );
  });

  return (
    <div className="container">
      <h3 className="badge bg-success text-wrap fs-4 ms-4 ">Add Post</h3>
      <div className="container-xl px-4 mt-4">
        <hr className="mt-0 mb-4"></hr>
        <div className="row">
          {/* piture-profile */}
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header fs-5">Post Image</div>
              <form onSubmit={handleSumbit}>
                <div className="card-body text-center">
                  <img
                    alt="Roomsimage"
                    className="img-account-profile rounded-circle mb-2"
                    src={
                      files
                        ? URL.createObjectURL(files[0])
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
              <div className="card-header fs-5">Post infomation</div>
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
                        step="0.01"
                        min="0"
                        placeholder="Enter price ...."
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
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
                        placeholder="Please select an item below"
                        disabled
                        value={type}
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
                      />
                    </div>
                    <div className="col-md-3">
                      <label
                        className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary ms-2"
                        htmlFor="featured"
                      >
                        Category
                      </label>
                      <select
                        id="hotelId"
                        style={{ lineHeight: "1.7rem" }}
                        onChange={(e) => {
                          setCategoryId(e.target.value.split(",")[0]);
                          setType(e.target.value.split(",")[1]);
                        }}
                        className="form-control featured"
                      >
                        <option hidden>Select Type</option>
                        {list}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label
                        className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary ms-2"
                        htmlFor="featured"
                      >
                        UserName
                      </label>
                      <select
                        id="hotelId"
                        style={{ lineHeight: "1.7rem" }}
                        onChange={(e) => {
                          setUserID(e.target.value.split(",")[0]);
                          setUserName(e.target.value.split(",")[1]);
                        }}
                        className="form-control featured"
                      >
                        <option hidden>Select Username</option>
                        {SelectedUser}
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
                  <Link id="back-link" className="float-end" to={"/Admin/Room"}>
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

export default NewR;
