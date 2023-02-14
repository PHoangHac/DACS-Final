import React, { useState } from "react";
import "./newuser.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import userimg from "../../../assets/img/user.png";

const New = () => {
  const [file, setFile] = useState(null);
  const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // const Navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();

    const newUser = {
      username,
      firstName,
      lastName,
      password,
      email,
      address,
      phone,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);

      try {
        const uploadRes = await axios.post("/upload-single", data);
        newUser.img = uploadRes.data;
        console.log(uploadRes);
      } catch (err) {}
    }
    try {
      const res = await axios.post(
        "http://localhost:7070/api/auth/register",
        newUser
      );
      // alert("Create user Successfull !");
      // Navigate("/Admin/User");
      toast.success(res.data, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      });
      toast.info(CustomToastWithLink, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 20000,
      });
    } catch (err) {
      toast.error(err.response.data.msg, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      });
      console.log(err);
    }
  };
  const CustomToastWithLink = () => (
    <div>
      <Link to="/Admin/User">Click here back to List</Link>
    </div>
  );

  const isValidFileUploaded = (file) => {
    const validExtensions = ["png", "jpeg", "jpg"];
    const fileExtension = file.type.split("/")[1];
    return validExtensions.includes(fileExtension);
  };

  const handleValdate = (e) => {
    if (e.target.files.length < 1) {
      return;
    }
    const file = e.target.files[0];
    setFile(e.target.files[0]);
    if (isValidFileUploaded(file)) {
      //file is valid
      toast.success("file is valid", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      });
    } else {
      //file is invalid
      toast.error("file is invalid", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="container">
      <h3 className="badge bg-success text-wrap fs-4 ms-4 ">Add New User</h3>
      <div className="container-xl px-4 mt-4">
        <hr className="mt-0 mb-4"></hr>
        <div className="row">
          {/* piture-profile */}
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header fs-5">User Image</div>
              <form onSubmit={handleSumbit}>
                <div className="card-body text-center">
                  <img
                    className="img-account-profile rounded-circle mb-2"
                    src={file ? URL.createObjectURL(file) : userimg}
                    alt="Userimage"
                  />

                  <div className="small font-italic text-muted mb-4">
                    JPG or PNG no larger than 5 MB
                  </div>

                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    onChange={handleValdate}
                  ></input>
                </div>
              </form>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header fs-5">User Infomation</div>
              <div className="card-body">
                <form onSubmit={handleSumbit}>
                  <div className="mb-3">
                    <label
                      className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary"
                      htmlFor="inputUsername"
                    >
                      User name (how your name will appear to other users on the
                      site)
                    </label>
                    <input
                      className="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter username...."
                      onChange={(e) => setUserName(e.target.value)}
                      // value="username"
                      pattern="^[A-Za-z0-9]{5,12}$"
                      title="Username should be 5-12 characters and shouldn't include any special character!"
                      required
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
                        placeholder="Enter first name...."
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
                        placeholder="Enter last name...."
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6 ">
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
                        placeholder="Enter location...."
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        className="small mb-1 fs-6 fw-normal badge bg-light text-dark border border-primary"
                        htmlFor="inputpassword"
                      >
                        Password
                      </label>
                      <input
                        className="form-control"
                        id="inputpassword"
                        type="password"
                        placeholder="Enter password...."
                        pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`}
                        title="Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
                        onChange={(e) => setPassword(e.target.value)}
                        required
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
                        placeholder="Enter phone number...."
                        onChange={(e) => setPhone(e.target.value)}
                        pattern="^[0-9\-\+]{10,11}$"
                        title="Phone number should be 10-11 number and shouldn't include any special character or character!"
                        required
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
                        placeholder="Enter email address...."
                        onChange={(e) => setEmail(e.target.value)}
                        pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"}
                        title="Must includes @gmail.com"
                        required
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
      <ToastContainer />
    </div>
  );
};

export default New;
