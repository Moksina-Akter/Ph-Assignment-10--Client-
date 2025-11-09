import React from "react";
import { Link } from "react-router";
import img1 from "../assets/img1.avif";
const LatestProducts = () => {
  return (
    <section className="px-5 lg:px-20 py-16 bg-gradient-to-b from-purple-50 to-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-purple-700">
        Latest 6 Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition">
          <img
            src={img1}
            alt="Product 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 space-y-3">
            <h3 className="text-xl font-semibold">Product 1</h3>
            <p className="text-gray-600">USA</p>
            <p className="text-gray-800 font-bold">$120</p>
            <p>Rating: 4.5</p>
            <p>Available: 20</p>
            <Link
              to="/product/1"
              className="pt-2inline-block btn bg-amber-600 text-white"
            >
              See Details
            </Link>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition">
          <img
            src={img1}
            alt="Product 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Product 2</h3>
            <p className="text-gray-600">Germany</p>
            <p className="text-gray-800 font-bold">$150</p>
            <p>Rating: 4.0</p>
            <p>Available: 15</p>
            <Link
              to="/product/2"
              className="mt-2 inline-block btn bg-gradient-to-r from-purple-400 to-purple-700 text-white"
            >
              See Details
            </Link>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition">
          <img
            src={img1}
            alt="Product 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Product 3</h3>
            <p className="text-gray-600">China</p>
            <p className="text-gray-800 font-bold">$90</p>
            <p>Rating: 4.2</p>
            <p>Available: 30</p>
            <Link
              to="/product/3"
              className="mt-2 inline-block btn bg-gradient-to-r from-purple-400 to-purple-700 text-white"
            >
              See Details
            </Link>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition">
          <img
            src={img1}
            alt="Product 4"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Product 4</h3>
            <p className="text-gray-600">India</p>
            <p className="text-gray-800 font-bold">$110</p>
            <p>Rating: 4.3</p>
            <p>Available: 25</p>
            <Link
              to="/product/4"
              className="mt-2 inline-block btn bg-gradient-to-r from-purple-400 to-purple-700 text-white"
            >
              See Details
            </Link>
          </div>
        </div>

        {/* Product 5 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition">
          <img
            src={img1}
            alt="Product 5"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Product 5</h3>
            <p className="text-gray-600">Japan</p>
            <p className="text-gray-800 font-bold">$200</p>
            <p>Rating: 4.8</p>
            <p>Available: 10</p>
            <Link
              to="/product/5"
              className="mt-2 inline-block btn bg-gradient-to-r from-purple-400 to-purple-700 text-white"
            >
              See Details
            </Link>
          </div>
        </div>

        {/* Product 6 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition">
          <img
            src={img1}
            alt="Product 6"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Product 6</h3>
            <p className="text-gray-600">Brazil</p>
            <p className="text-gray-800 font-bold">$130</p>
            <p>Rating: 4.4</p>
            <p>Available: 18</p>
            <Link
              to="/product/6"
              className="mt-2 inline-block btn bg-gradient-to-r from-purple-400 to-purple-700 text-white"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
