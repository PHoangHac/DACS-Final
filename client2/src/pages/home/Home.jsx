import React from "react";
//import framework

import Header from "../../components/navbar/Header";
import Search from "../../components/search/Search";
import Banner from "../../components/banner/Banner";
import Category from "../../components/category/Category";
import RoomRecom2 from "../../components/roomRecommend/RoomRecom2";
import Footer from "../../components/footer/Footer";
//import function components

const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <Banner />
      <Category />
      <RoomRecom2 />
      <Footer />
    </div>
  );
};

export default Home;
