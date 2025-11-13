import React from "react";

const Card = ({ product }) => {
  return (
    <div
      key={product._id}
      className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p>
          Price: <span className="text-amber-500">${product.price}</span>
        </p>
        <p>Origin: {product.originCountry}</p>
        <p>Available: {product.quantity}</p>
        <p>
          Rating: <span className="text-amber-500">{product.rating} ⭐</span>
        </p>
        <Link
          to={`/product/${product._id}`}
          className="mt-2 bg-purple-700 text-white py-1 rounded text-center hover:bg-purple-800"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
