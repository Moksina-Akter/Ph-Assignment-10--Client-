import React from "react";
import Banner from "../Components/Banner";
import Testimonials from "../Components/Testimonials";
import LatestProducts from "../Components/LatestProducts";
import FeaturedExporters from "../Components/FeaturedExporters";

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <h1 className="text-3xl md:text-4xl p-5 font-bold text-center mb-10 text-purple-700">
        My Import-Export Hub
      </h1>
      <Banner />
      <LatestProducts />
      <FeaturedExporters />
      <Testimonials />
    </div>
  );
};

export default Home;
