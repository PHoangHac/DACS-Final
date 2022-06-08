import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
// import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import "./detailRoom.scss";
import axios from "axios";

const DetailRoom2 = () => {
  const [photos, setPhotos] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [area, setArea] = useState("");
  const [type, setType] = useState("");
  const [status, setSatus] = useState("");
  const [maxPeople, setPeople] = useState("");

  const { id } = useParams();

  // const { data, loading } = useFetch(`/room/${id}`);

  const getByIdRoom = async () => {
    const getData = await axios.get(`/room/${id}`);
    setPhotos(getData.data.photos);
    setTitle(getData.data.title);
    setPrice(getData.data.price);
    setAddress(getData.data.address);
    setDesc(getData.data.desc);
    setArea(getData.data.area);
    setType(getData.data.type);
    setSatus(getData.data.status);
    setPeople(getData.data.maxPeople);
    // console.log(getData);
  };

  useEffect(() => {
    getByIdRoom();
  }, []);

  return (
    <div className="container mt-3 container-detail">
      <div className="card border-primary mb-3" style={{ maxwidth: "18rem" }}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={photos[0]} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={photos[1]} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={photos[2]} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <div id="detail-h1" className="card-header text-center">
          {title}
        </div>
        <div className="card-body text-black">
          <h5 id="detail-h5" className="card-title">
            {price} Triệu
          </h5>
          <p className="card-text">
            <i className="fa-solid fa-location-dot me-2"></i>
            {address}
          </p>
          <p className="card-text">{desc}</p>
          <p className="card-text">
            <i className="fa-solid fa-chart-area me-2"></i> Diện tích: {area} m²
            <i
              id="detail-type"
              className="fa-solid fa-align-left me-2 ms-5"
            ></i>{" "}
            Loại hình: {type}
          </p>
          <p className="card-text">
            <i className="fa-brands fa-airbnb me-2"></i> Trạng thái: {status}
            <i className="fa-solid fa-people-line ms-5 me-2"></i> Số người:{" "}
            {maxPeople}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailRoom2;
