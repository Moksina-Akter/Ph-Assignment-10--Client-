import { Link, useLoaderData } from "react-router";

const LatestProducts = () => {
  const products = useLoaderData();

  return (
    <section className="px-5 lg:px-20 py-10 dark:bg-black ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-purple-700">
        Latest 6 Products
      </h2>

      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products?.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition flex flex-col justify-between h-full"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover"
            />

            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-xl dark:text-black font-semibold">
                {product.name}
              </h3>

              <div className="flex justify-between items-center flex-wrap text-gray-600">
                <p>
                  Price:
                  <span className="text-amber-500">${product.price}</span>
                </p>
                <p>Origin: {product.originCountry}</p>
              </div>

              <div className="flex justify-between items-center flex-wrap text-gray-600">
                <p>Available: {product.quantity}</p>
                <p>
                  Rating:
                  <span className="text-amber-500">{product.rating} ⭐</span>
                </p>
              </div>

              <Link
                to={`/product/${product._id}`}
                className="mt-3 text-center bg-purple-700 text-[#efd8ed] py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;
