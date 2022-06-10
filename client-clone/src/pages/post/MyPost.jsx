import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/navbar/Header";
import UserPost from "../../components/postComponent/UserPost";

const MyPost = () => {
  return (
    <>
      <Header />
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <UserPost />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MyPost;
