import React, { useState, useEffect, useContext, useCallback } from "react";
import { Carousel } from "react-bootstrap";
// import useFetch from "../../hooks/useFetch";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./detailRoom.scss";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

const DetailRoom = () => {
  const [photos, setPhotos] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [area, setArea] = useState("");
  const [status, setSatus] = useState("");
  const [maxPeople, setPeople] = useState("");
  const [username, setUserName] = useState("");
  const [typeRoom, setTypeRoom] = useState("");

  const { id } = useParams();

  const { user } = useContext(AuthContext);

  const Navigate = useNavigate();

  // const getByIdRoom = async () => {
  //   const getData = await axios.get(`/room/${id}`);
  //   setPhotos(getData.data.photos);
  //   setTitle(getData.data.title);
  //   setPrice(getData.data.price);
  //   setAddress(getData.data.address);
  //   setDesc(getData.data.desc);
  //   setArea(getData.data.area);
  //   setSatus(getData.data.status);
  //   setPeople(getData.data.maxPeople);
  //   setUserName(getData.data.username);
  //   setTypeRoom(getData.data.typeRoom);
  //   // console.log(getData);
  // };

  // useEffect(() => {
  //   getByIdRoom();
  // }, []);

  const getByIdRoom = useCallback(async () => {
    const getData = await axios.get(`/room/${id}`);
    setPhotos(getData.data.photos);
    setTitle(getData.data.title);
    setPrice(getData.data.price);
    setAddress(getData.data.address);
    setDesc(getData.data.desc);
    setArea(getData.data.area);
    setSatus(getData.data.status);
    setPeople(getData.data.maxPeople);
    setUserName(getData.data.username);
    setTypeRoom(getData.data.typeRoom);
  }, [id]);

  useEffect(() => {
    getByIdRoom();
  }, [getByIdRoom]);

  const deleteRoom = async () => {
    axios
      .delete(`/room/delete/${id}`, {
        data: { username: user.username },
      })
      .then(() => {
        Navigate("/");
      });
  };

  const PL = "http://localhost:7070/images/";

  return (
    <div className="card border-primary mb-3" style={{ maxwidth: "18rem" }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PL + photos[0]}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PL + photos[1]}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PL + photos[2]}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div id="detail-h1" className="card-header text-center">
        {title}
      </div>
      <div className="card-body text-black">
        {username === user?.username && (
          <div className="card-text float-end">
            <h6 className="card-title">
              <Link to={`/UpdatePost/${id}`}>
                <i className="fas fa-edit fs-4"></i>
              </Link>
            </h6>
            <h6 className="card-title">
              <i
                onClick={deleteRoom}
                id="delete-post"
                className="fa fa-trash fs-4"
              ></i>
            </h6>
          </div>
        )}
        <div className="card-text">
          <h5 id="detail-h5" className="card-title">
            {price} Triệu
          </h5>
        </div>

        <p className="card-text">
          <i className="fa-solid fa-location-dot me-2"></i>
          {address}
        </p>
        <p className="card-text">{desc}</p>
        <p className="card-text float-start">
          <i className="fa-solid fa-chart-area mb-4"></i> Diện tích: {area} m²
          <br />
          <i id="detail-type" className="fa-solid fa-align-left "></i> Loại
          hình: {typeRoom}
        </p>
        <p className="card-text float-end">
          <i className="fa-brands fa-airbnb mb-4"></i> Trạng thái: {status}
          <br />
          <i className="fa-solid fa-people-line "></i> Số người: {maxPeople}
        </p>
      </div>
    </div>
  );
};

export default DetailRoom;
