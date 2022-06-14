import React, { useState } from "react";
import "./newuser.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const New = () => {
  const [file, setFile] = useState("");
  const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const Navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/hoanghac/image/upload",
        data
      );
      console.log(uploadRes.data);
      const { url } = uploadRes.data;

      await axios.post("http://localhost:7070/api/auth/register", {
        // newUser,
        username: username,
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email,
        address: address,
        phone: phone,
        img: url,
      });
      alert("Create user Successfull !");
      Navigate("/Admin/User");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h3>Create New User</h3>
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
                      file
                        ? URL.createObjectURL(file)
                        : "http://bootdey.com/img/Content/avatar/avatar1.png"
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
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form onSubmit={handleSumbit}>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputUsername">
                      Username (how your name will appear to other users on the
                      site)
                    </label>
                    <input
                      className="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your username...."
                      onChange={(e) => setUserName(e.target.value)}
                      // value="username"
                    />
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">
                        First name
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name...."
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">
                        Last name
                      </label>
                      <input
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name...."
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLocation">
                        Address
                      </label>
                      <input
                        className="form-control"
                        id="inputLocation"
                        type="text"
                        placeholder="Enter your location...."
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputpassword">
                        Password
                      </label>
                      <input
                        className="form-control"
                        id="inputpassword"
                        type="text"
                        placeholder="Enter your password...."
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">
                        Phone number
                      </label>
                      <input
                        className="form-control"
                        id="inputPhone"
                        type="tel"
                        placeholder="Enter your phone number...."
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputEmailAddress">
                        Email
                      </label>
                      <input
                        className="form-control"
                        id="inputEmailAddress"
                        type="email"
                        placeholder="Enter your email address...."
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <button className="btn btn-primary">Create</button>
                  <Link id="back-link" className="float-end" to={"/Admin/User"}>
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

export default New;
