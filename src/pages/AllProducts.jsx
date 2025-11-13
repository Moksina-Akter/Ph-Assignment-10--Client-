import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const AllProducts = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchText.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/search?search=${searchText}`
      );
      if (!res.ok) throw new Error("Failed to fetch search results");
      const data = await res.json();
      console.log("Search result:", data);
      setProducts(data);
      setSearchText("");
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setProducts(loadedProducts);
    setSearchText("");
  };

  return (
    <div className="bg-white max-w-6xl mx-auto min-h-screen">
      <title>All Products | Import Export Hub</title>

      <div className="container dark:bg-black mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-purple-900 mb-6 text-center">
          All Products ({products.length})
        </h1>

        <form
          onSubmit={handleSearch}
          className="mt-5 mb-10 flex flex-wrap justify-center gap-3"
        >
          <input
            name="search"
            type="search"
            placeholder="Search by product name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-700"
          />

          <button
            type="submit"
            className="bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
          >
            {loading ? "Searching..." : "Search"}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-400 text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-500 transition-colors"
          >
            Show All
          </button>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover"
                />

                <div className="p-4 flex flex-col gap-3">
                  <h2 className="text-xl font-semibold">{product.name}</h2>

                  <div className="flex justify-between text-gray-600">
                    <p>
                      Price:{" "}
                      <span className="text-amber-500">${product.price}</span>
                    </p>
                    <p>Origin: {product.originCountry}</p>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <p>Available: {product.quantity}</p>
                    <p>
                      Rating:{" "}
                      <span className="text-amber-500">
                        {product.rating} ⭐
                      </span>
                    </p>
                  </div>

                  <Link
                    to={`/product/${product._id}`}
                    className="mt-3 text-center bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
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
