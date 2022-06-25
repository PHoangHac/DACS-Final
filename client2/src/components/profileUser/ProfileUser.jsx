import React, { useState, useEffect, useCallback } from "react";
import "./profile.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ProfileUser = () => {
  const [file, setFiles] = useState(null);
  const [img, setImg] = useState("");
  const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // const [avatar, setAvatar] = useState("");

  const { id } = useParams();

  // console.log(avatar);
  // console.log(img);
  // console.log(file);

  const UpdateSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      address: address,
      phone: phone,
      email: email,
    };

    try {
      if (file) {
        const data = new FormData();
        const filename = Date.now() + file?.name;
        data.append("name", filename);
        data.append("file", file);
        const uploadRes = await axios.post("/upload-single", data);
        newPost.img = uploadRes.data;
      }
      // setAvatar(uploadRes.data);
      // console.log(uploadRes.data);

      // const res = await axios.put(`/user/${id}`, {
      //   username: username,
      //   firstName: firstName,
      //   lastName: lastName,
      //   address: address,
      //   phone: phone,
      //   email: email,
      //   img: file ? uploadRes.data : img,
      // });
      const res = await axios.put(`/user/${id}`, newPost);

      toast.success(res.data, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getUserById = useCallback(async () => {
    const getdata = await axios.get(`/user/${id}`);
    setImg(getdata.data.img);
    setUserName(getdata.data.username);
    setFirstName(getdata.data.firstName);
    setLastName(getdata.data.lastName);
    setAddress(getdata.data.address);
    setPhone(getdata.data.phone);
    setEmail(getdata.data.email);
  }, [id]);

  useEffect(() => {
    getUserById();
  }, [getUserById]);

  const PL = "http://localhost:7070/images/";

  const handleValdate = (e) => {
    setFiles(e.target.files[0]);
  };

  return (
    <div className="container">
      <h3 className="badge bg-primary text-wrap fs-4 mt-3 ms-4">Update User</h3>
      <div className="container-xl px-4 mt-4">
        <hr className="mt-0 mb-4"></hr>
        <div className="row">
          {/* piture-profile */}
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header fs-5">Profile Picture</div>
              <form autoComplete="off" onSubmit={UpdateSubmit}>
                <div className="card-body text-center">
                  <img
                    className="img-account-profile rounded-circle mb-2"
                    src={file ? URL.createObjectURL(file) : PL + img}
                    alt="Userimage"
                  />

                  <div className="small font-italic text-muted mb-4">
                    JPG or PNG no larger than 5 MB
                  </div>
                  <input
                    onChange={handleValdate}
                    className="form-control"
                    type="file"
                    id="formFile"
                  ></input>
                </div>
              </form>
            </div>
          </div>

          {/* Proflie-details */}
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header fs-5">Account Details</div>
              <div className="card-body">
                <form onSubmit={UpdateSubmit}>
                  <div className="mb-3">
                    <label
                      className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary"
                      htmlFor="inputUsername"
                    >
                      Username (how your name will appear to other users on the
                      site)
                    </label>
                    <input
                      className="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your username to to edit ...."
                      value={username}
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label
                        className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary"
                        htmlFor="inputFirstName"
                      >
                        First name
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name to edit ...."
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label
                        className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary"
                        htmlFor="inputLastName"
                      >
                        Last name
                      </label>
                      <input
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name to edit ...."
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
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
                        placeholder="Enter your location to edit ...."
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label
                        className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary"
                        htmlFor="inputPhone"
                      >
                        Phone number
                      </label>
                      <input
                        className="form-control"
                        id="inputPhone"
                        type="tel"
                        placeholder="Enter your phone number to edit ...."
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label
                        className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary"
                        htmlFor="inputEmailAddress"
                      >
                        Email
                      </label>
                      <input
                        className="form-control"
                        id="inputEmailAddress"
                        type="email"
                        placeholder="Enter your email address to edit ...."
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <button className="btn btn-primary">Save changes</button>
                  <Link id="back-link" className="float-end" to={"/"}>
                    Back Home
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

export default ProfileUser;
