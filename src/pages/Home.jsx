import React from "react";
import Banner from "../Components/Banner";
import Testimonials from "../Components/Testimonials";
import LatestProducts from "../Components/LatestProducts";
import FeaturedExporters from "../Components/FeaturedExporters";

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <Banner />
      <LatestProducts />
      <FeaturedExporters />
      <Testimonials />
    </div>
  );
};

export default Home;
