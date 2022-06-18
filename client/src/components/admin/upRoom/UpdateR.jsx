import React, { useState, useEffect, useCallback } from "react";
import "../updateUser/update.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateR = () => {
  const [files, setFiles] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [maxPeople, setMaxPeople] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [photos, setPhotos] = useState([]);
  const [typeRoom, setTypeRoom] = useState("");

  const { id } = useParams();
  // const Nagigate = useNavigate();

  const UpdateSubmit = async (e) => {
    e.preventDefault();

    try {
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

      const res = await axios.put(`/room/${id}`, {
        title: title,
        price: price,
        status: status,
        maxPeople: maxPeople,
        desc: desc,
        photos: files ? listphoto : photos,
        type: typeRoom,
      });
      // alert("Update Room successful !");
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

  const getRoomById = useCallback(async () => {
    const getdata = await axios.get(`/room/${id}`);
    setTitle(getdata.data.title);
    setPrice(getdata.data.price);
    setStatus(getdata.data.status);
    setAddress(getdata.data.address);
    setMaxPeople(getdata.data.maxPeople);
    setArea(getdata.data.area);
    setDesc(getdata.data.desc);
    setPhotos(getdata.data.photos);
    setTypeRoom(getdata.data.type);
  }, [id]);

  useEffect(() => {
    getRoomById();
  }, [getRoomById]);

  // console.log(img);

  const PL = "http://localhost:7070/images/";

  return (
    <div className="container">
      <h3>Update Room</h3>
      <div className="container-xl px-4 mt-4">
        <hr className="mt-0 mb-4"></hr>
        <div className="row">
          {/* piture-profile */}
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Room Picture</div>
              <form onSubmit={UpdateSubmit}>
                <div className="card-body text-center">
                  <img
                    className="img-account-profile rounded-circle mb-2"
                    src={files ? URL.createObjectURL(files[0]) : PL + photos[0]}
                    alt="Roomsimage"
                  />

                  <div className="small font-italic text-muted mb-4">
                    JPG or PNG no larger than 5 MB
                  </div>
                  <input
                    className="form-control"
                    multiple
                    type="file"
                    id="formFile"
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
              <div className="card-header">Room Details</div>
              <div className="card-body">
                <form onSubmit={UpdateSubmit}>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputTitle">
                      Title
                    </label>
                    <input
                      className="form-control"
                      id="inputTitle"
                      type="text"
                      placeholder="Enter title to to edit ...."
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPrice">
                        Price
                      </label>
                      <input
                        className="form-control"
                        id="inputPrice"
                        type="number"
                        placeholder="Enter price to edit ...."
                        value={price}
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputStatus">
                        Status
                      </label>
                      <input
                        className="form-control"
                        id="inputStatus"
                        type="text"
                        placeholder="Enter status to edit ...."
                        value={status}
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-9">
                      <label className="small mb-1" htmlFor="inputLocation">
                        Address
                      </label>
                      <input
                        className="form-control"
                        id="inputLocation"
                        type="text"
                        placeholder="Enter location to edit ...."
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="small mb-1" htmlFor="inputArea">
                        Area
                      </label>
                      <input
                        className="form-control"
                        id="inputArea"
                        type="text"
                        placeholder="Enter Area to edit ...."
                        value={area}
                        onChange={(e) => {
                          setArea(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-5">
                      <label className="small mb-1" htmlFor="inputmaxPeople">
                        MaxPeople
                      </label>
                      <input
                        className="form-control"
                        id="inputmaxPeople"
                        type="number"
                        placeholder="Enter maxPeople to edit ...."
                        value={maxPeople}
                        onChange={(e) => {
                          setMaxPeople(e.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-7">
                      <label className="small mb-1" htmlFor="inputType">
                        Type
                      </label>
                      <input
                        className="form-control"
                        id="inputType"
                        type="text"
                        disabled
                        placeholder="Enter type to edit ...."
                        value={typeRoom}
                        onChange={(e) => {
                          setTypeRoom(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-12">
                      <label className="small mb-1" htmlFor="inputDesc">
                        Desc
                      </label>
                      <textarea
                        style={{ height: "7rem" }}
                        className="form-control"
                        id="inputDesc"
                        type="text"
                        placeholder="Enter descripton to edit ...."
                        value={desc}
                        onChange={(e) => {
                          setDesc(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <button className="btn btn-primary">Save changes</button>
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

export default UpdateR;
