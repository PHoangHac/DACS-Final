import React, { useRef } from "react";
import Header from "../../components/navbar/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import "./contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const handleEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v6o01bg",
        "template_o3ubgdg",
        form.current,
        "wSPa9QiB1yf65NOCy"
      )
      .then((res) => {
        alert("Send Successfull !");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="container border container-contact">
        <h1 className="contact-h1 ">Contact With Us</h1>
        <form ref={form} className="row contact-form" onSubmit={handleEmail}>
          <label htmlFor="name" id="label-contact" className="fw-bold fs-6">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            className="form-control"
            required
          />

          <label htmlFor="email" id="label-contact" className="fw-bold fs-6">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            className="form-control"
            required
          />

          <label htmlFor="message" id="label-contact" className="fw-bold fs-6">
            Message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            className="form-control"
            rows="4"
            required
          />

          <button
            value="Send"
            className="form-control btn btn-success contact-btn"
          >
            Send
          </button>
        </form>
        <div id="contact-back" className="text-center mb-3">
          <Link to={"/"} id="link-contact" className="text-decoration-none">
            <i className="fa-solid fa-arrow-left-long"></i>&nbsp;Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
