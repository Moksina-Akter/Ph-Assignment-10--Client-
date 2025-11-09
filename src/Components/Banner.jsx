import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img5.avif";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="py-10 px-5 lg:px-20 rounded-lg mt-20 flex bg-gradient-to-tl from-purple-100 via-purple-200 to-purple-100 flex-col-reverse md:flex-row items-center justify-between">
      {/* Left side - Title & Buttons */}
      <div className="space-y-5 w-full md:w-1/2">
        <h1 className="text-3xl mt-3 md:mt-0 lg:text-5xl font-bold text-purple-700">
          Welcome to ImportExportHub
        </h1>
        <p className="text-gray-600">
          Manage all your exports and imports seamlessly from a single platform.
        </p>
        <div className="flex gap-5 items-center">
          <Link
            to="/all-products"
            className="btn bg-gradient-to-r from-purple-400 to-purple-700 text-white"
          >
            All Products
          </Link>
          <Link
            to="/add-export"
            className="btn bg-gradient-to-r from-purple-400 to-purple-700 text-white"
          >
            Add Export
          </Link>
        </div>
      </div>

      {/* Right side - Image Grid */}
      <div className="md:grid grid-cols-2 gap-2 lg:grid-rows-2 w-full md:w-1/2">
        <div className="overflow-hidden transform transition duration-500 hover:scale-105 hover:-rotate-3 hover:shadow-xl cursor-pointer row-span-2 flex justify-center items-center p-2 rounded-lg bg-white/20 backdrop-blur-md shadow-lg">
          <img
            src={img1}
            alt="export"
            className="rounded-md md:h-[400px] object-cover"
          />
        </div>
        <div className="overflow-hidden transform transition duration-500 hover:scale-105 hover:-rotate-3 hover:shadow-xl cursor-pointer row-span-1 flex justify-center items-center p-2 rounded-lg bg-white/20 backdrop-blur-md shadow-lg">
          <img src={img2} alt="import" className="rounded-md object-cover " />
        </div>
        <div className="overflow-hidden transform transition duration-500 hover:scale-105 hover:-rotate-3 hover:shadow-xl cursor-pointer row-span-2 flex justify-center items-center p-2 rounded-lg bg-white/20 backdrop-blur-md shadow-lg">
          <img
            src={img3}
            alt="trade"
            className="rounded-md md:h-[360px] object-cover"
          />
        </div>
        <div className="overflow-hidden transform transition duration-500 hover:scale-105 hover:-rotate-3 hover:shadow-xl cursor-pointer row-span-1 flex justify-center items-center p-2 rounded-lg bg-white/20 backdrop-blur-md shadow-lg">
          <img src={img4} alt="business" className="rounded-md object-cover " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
