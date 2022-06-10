import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { AuthContext } from "../../contexts/AuthContext";

const UserDetail = () => {
  const { id } = useParams();
  const [username, setUserName] = useState("");

  const getUser = async () => {
    const getData = await axios.get(`/room/${id}`);
    setUserName(getData.data.username);
    // console.log(getData);
  };

  useEffect(() => {
    getUser();
  }, []);

  // console.log(username);

  // const { user } = useContext(AuthContext);

  // console.log(user);

  return (
    <div
      id="card-user"
      className="card border-primary"
      style={{ borderradius: "15px" }}
    >
      <div className="card-body p-4">
        <div className="text-black">
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
              // src={user?.img}
              alt="Generic placeholder image"
              className="img-fluid"
              style={{ width: "180px", borderradius: "10px" }}
            />
          </div>
          <div className="text-center me-1">
            <h5 id="username" className="mb-1 mt-2">
              Author: {username}
            </h5>
            <p id="userPhone" className="mb-2" style={{ color: "#2b2a2a" }}>
              {/* Phone: {user?.phone} */}
            </p>

            <div>
              <button
                type="button"
                className="btn btn-outline-primary me-1 mt-1"
              >
                Chat
              </button>

              <button type="button" className="btn btn-primary mt-1">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
