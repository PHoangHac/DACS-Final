import React, { useState } from "react";
import "../newUser/newuser.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const NewCategory = () => {
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
      // console.log(uploadRes.data);
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
      <h3>Create New Category</h3>
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
                    src={
                      file
                        ? URL.createObjectURL(file)
                        : "https://media.istockphoto.com/vectors/camera-icon-vector-id1175387759?k=20&m=1175387759&s=612x612&w=0&h=a-8a56ol0jlX_S5NuKxgCPwRg5xqcZlXXseMpmB0Bek="
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
                    <label className="small mb-1" htmlFor="inputName">
                      Name
                    </label>
                    <input
                      className="form-control"
                      id="inputName"
                      type="text"
                      placeholder="Enter your hotel name...."
                      onChange={(e) => setUserName(e.target.value)}
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
                        placeholder="Enter your first name...."
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1 ms-2" htmlFor="featured">
                        Featured
                      </label>
                      <select id="featured">
                        <option value={false}>No</option>
                        <option value={true}>Yes</option>
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
