import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const product = useLoaderData();
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  console.log(product);
  const handleImport = async () => {
    const importQty = parseInt(quantity);
    if (importQty <= 0 || importQty > updatedProduct.quantity) {
      toast.error("Invalid quantity!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `https://ph-assignment-10-server-self.vercel.app/import/user123`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productId: updatedProduct._id,
            importQuantity: importQty,
          }),
        }
      );
      const data = await res.json();

      if (res.ok && data.success) {
        toast.success("Product imported successfully!");
        setUpdatedProduct({
          ...updatedProduct,
          quantity: updatedProduct.quantity - importQty,
        });
        setQuantity("");
        setShowModal(false);
      } else {
        toast.error(data.message || "Failed to import product");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error importing product!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl md:flex gap-7 mx-auto p-6">
      <title>ProductDetails</title>
      <div>
        <img
          src={updatedProduct.image}
          alt={updatedProduct.name}
          className="w-96 h-80 object-cover rounded-lg shadow-lg mb-6"
        />
      </div>
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-purple-900 mb-2">
          {updatedProduct.name}
        </h2>
        <p>
          <strong>Origin:</strong> {updatedProduct.originCountry}
        </p>
        <p>
          <strong>Price:</strong> ${updatedProduct.price}
        </p>
        <p>
          <strong>Available Quantity:</strong> {updatedProduct.quantity}
        </p>
        <p>
          <strong>Rating:</strong> {updatedProduct.rating} ⭐
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-800 mt-4"
        >
          Import Now
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-6  rounded-lg w-96 shadow-xl">
            <h3 className="text-xl font-semibold mb-4 dark:text-purple-700">
              Import Product
            </h3>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter quantity"
              className="w-full border dark:bg-gray-300 border-gray-300 rounded-lg p-2 mb-4"
            />
            <button
              onClick={handleImport}
              disabled={
                quantity <= 0 || quantity > updatedProduct.quantity || loading
              }
              className={`w-full py-2 rounded-lg text-white ${
                quantity <= 0 || quantity > updatedProduct.quantity
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-purple-700 hover:bg-purple-800"
              }`}
            >
              {loading ? "Importing..." : "Submit"}
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-3 py-2 rounded-lg border border-purple-700 text-purple-700 hover:bg-purple-100"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
