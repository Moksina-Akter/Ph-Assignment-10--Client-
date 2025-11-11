// import React from "react";
// import { Link, useLoaderData } from "react-router";

// const AllProducts = () => {
//   const products = useLoaderData(); // products array
//   console.log(products);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-purple-900 mb-6 text-center">
//         All Products
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4 space-y-3">
//               <h2 className="text-xl font-semibold text-gray-800">
//                 {product.name}
//               </h2>
//               <div className="flex justify-between items-center">
//                 <p className="text-gray-600 mt-1">
//                   Price:
//                   <span className="text-amber-500"> ${product.price}</span>
//                 </p>
//                 <p className="text-gray-600 mt-1">
//                   Origin: {product.originCountry}
//                 </p>
//               </div>
//               <div className="flex justify-between items-center">
//                 <p className="text-gray-600 mt-1">
//                   Available Quantity: {product.quantity}
//                 </p>
//                 <p className="text-gray-600 mt-1">
//                   Rating:
//                   <span className="text-amber-500">
//                     {product.rating} ⭐⭐⭐
//                   </span>
//                 </p>
//               </div>

//               <Link
//                 to={`/product/${product._id}`}
//                 className="block mt-4 text-center bg-[#693382] text-[#efd8ed] py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
//               >
//                 See Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllProducts;
//-----------------------------------
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const AllProducts = () => {
  const products = useLoaderData();
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div
      className={
        darkMode ? "bg-gray-900 min-h-screen" : "bg-gray-100 min-h-screen"
      }
    >
      <div className="flex justify-end p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition-colors"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1
          className={
            darkMode
              ? "text-3xl font-bold text-white mb-6 text-center"
              : "text-3xl font-bold text-purple-900 mb-6 text-center"
          }
        >
          All Products ({filteredProducts.length})
        </h1>

        <div className="mb-6 text-center">
          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className={
                darkMode
                  ? "bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full"
                  : "bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full"
              }
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-4 flex flex-col gap-3">
                <h2 className="text-xl font-semibold">{product.name}</h2>

                <div className="flex justify-between items-center flex-wrap gap-2 text-gray-600">
                  <p>
                    Price:
                    <span className="text-amber-500">${product.price}</span>
                  </p>
                  <p>Origin: {product.originCountry}</p>
                </div>

                <div className="flex justify-between items-center flex-wrap gap-2 text-gray-600">
                  <p>Available: {product.quantity}</p>
                  <p>
                    Rating:{" "}
                    <span className="text-amber-500">{product.rating} ⭐</span>
                  </p>
                </div>

                <Link
                  to={`/product/${product._id}`}
                  className="mt-3 text-center bg-[#693382] text-[#efd8ed] py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
