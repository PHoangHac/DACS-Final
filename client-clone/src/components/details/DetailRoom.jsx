import React from "react";
import { Carousel } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const DetailRoom = () => {
  const { id } = useParams();

  const { data, loading } = useFetch(`/room/${id}`);

  const Array = Object.keys(data);

  // console.log(Array);

  return (
    <section style={{ backgroundcolor: "#eee" }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          {loading ? (
            "loading data...."
          ) : (
            <>
              {Object.keys(data)
                .slice(0, 1)
                .map((value, index) => {
                  return (
                    <div className="col-9" key={index}>
                      <div className="card text-black">
                        <Carousel variant="dark" className="m-5">
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={data.photos[0]}
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={data.photos[1]}
                              alt="Second slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={data.photos[2]}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                        </Carousel>
                        <div className="card-body">
                          <div className="text-center">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="text-muted mb-4">{data.type}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-muted mb-4">{data.desc}</p>
                          </div>
                          <div>
                            <div className="d-flex justify-content-between">
                              <span>Địa chỉ :</span>
                              <span>{data.address}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span>Giá :</span>
                              <span>{data.price}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span>Diện tích :</span>
                              <span>{data.area}</span>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between total font-weight-bold mt-4">
                            <span>Tình trạng</span>
                            <span>{data.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailRoom;
