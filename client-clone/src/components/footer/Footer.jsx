import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer id="Footer" className="bg-light text-center text-lg-start ">
        <div className="text-center d-flex justify-content-center">
          <i className="fa-brands fa-facebook-square icon-footer"></i>
          <i className="fa-brands fa-twitter-square icon-footer"></i>
          <i className="fa-brands fa-youtube icon-footer"></i>
          <i className="fa-brands fa-instagram icon-footer"></i>
          <i className="fa-brands fa-linkedin icon-footer"></i>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundcolor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <span
            className="text-dark"
            href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
          >
            ROOM
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
