import React from "react";
import Banner from "../Components/Banner";
import WhyChooseUs from "../Components/WhyChooseUs";
import Testimonials from "../Components/Testimonials";
import LatestProducts from "../Components/LatestProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestProducts />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
