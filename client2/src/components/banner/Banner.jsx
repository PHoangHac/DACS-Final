import React from "react";
import { Carousel } from "react-bootstrap";
import Slider1 from "../../assets/img/slider1.jpg";
import Slider2 from "../../assets/img/slider2.jpg";
import "./banner.scss";

const Banner = () => {
  return (
    <div id="container_banner" className="container" style={{ marginTop: 10 }}>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={Slider1} alt="First slide" />
          <Carousel.Caption id="Carousel-div">
            <h3 className="badge bg-danger text-wrap fs-4">
              First slide label
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Slider2} alt="Second slide" />
          <Carousel.Caption id="Carousel-div">
            <h3 className="badge bg-danger text-wrap fs-4">
              Second slide label
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slider2} alt="Third slide" />
          <Carousel.Caption id="Carousel-div">
            <h3 className="badge bg-danger text-wrap fs-4">
              Third slide label
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
