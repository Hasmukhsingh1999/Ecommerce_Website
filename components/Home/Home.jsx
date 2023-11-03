import React from "react";
import Navbar from "../Navbar/Navbar";
import Features from "../Features/Features";
import Products from "../Products/Products";
import Pagination from "../pagination/Pagination";
import Footer from "../Footer/Footer";
import Featuring from "../Featuring/Featuring";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Features />
      <div>
        <Products />
      </div>
      <Pagination />
      <Featuring/>
      <Footer/>
    </div>
  );
};

export default Home;
