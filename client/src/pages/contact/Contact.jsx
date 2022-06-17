import React, { useRef, useState, useEffect } from "react";
import Header from "../../components/navbar/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import "./contact.scss";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const [name, enableName] = useState("");
  const [email, enableEmail] = useState("");
  const [message, enableMessage] = useState("");
  const [double, setDouble] = useState(false);

  const handleTextEmailChange = (event) => {
    enableEmail(event.target.value);
  };

  const handleTextNameChange = (event) => {
    enableName(event.target.value);
  };

  const handleTextMessageChange = (event) => {
    enableMessage(event.target.value);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDouble(false);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleEmail = (e) => {
    e.preventDefault();
    setDouble(true);
    emailjs
      .sendForm(
        "service_v6o01bg",
        "template_o3ubgdg",
        form.current,
        "wSPa9QiB1yf65NOCy"
      )
      .then((res) => {
        toast.success(res.text, {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 5000,
        });
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
            onChange={handleTextNameChange}
            value={name}
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
            onChange={handleTextEmailChange}
            value={email}
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
            onChange={handleTextMessageChange}
            value={message}
            rows="4"
            required
          />

          <button
            value="Send"
            className="form-control btn btn-success contact-btn"
            disabled={double || !name || !email || !message}
          >
            Send
          </button>
        </form>
        <div id="contact-back" className="text-center mb-3">
          <Link to={"/"} id="link-contact" className="text-decoration-none">
            <i className="fa-solid fa-arrow-left-long"></i>&nbsp;Home
          </Link>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
