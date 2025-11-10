// import React, { useState } from "react";
// import { useLoaderData } from "react-router";

// const ProductDetails = () => {
//   const product = useLoaderData();
//   const [showModal, setShowModal] = useState(false);
//   const [quantity, setQuantity] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [updatedProduct, setUpdatedProduct] = useState(product);

//   const handleImport = async () => {
//     if (quantity <= 0 || quantity > updatedProduct.quantity) {
//       alert("Invalid quantity!");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch(
//         `http://localhost:3000/import/${updatedProduct._id}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             importQuantity: parseInt(quantity),
//             userId: "user123", // static just for testing
//           }),
//         }
//       );

//       if (res.ok) {
//         alert("Product imported successfully!");
//         const newQuantity = updatedProduct.quantity - parseInt(quantity);
//         setUpdatedProduct({ ...updatedProduct, quantity: newQuantity });
//         setQuantity("");
//         setShowModal(false);
//       } else {
//         const errorData = await res.json();
//         alert(errorData.message || "Failed to import product");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Error importing product!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl md:flex gap-7 mx-auto p-6">
//       <div>
//         <img
//           src={updatedProduct.image}
//           alt={updatedProduct.name}
//           className="w-96 h-80 object-cover rounded-lg shadow-lg mb-6"
//         />
//       </div>
//       <div>
//         <h2 className="text-3xl font-bold text-purple-900 mb-2">
//           {updatedProduct.name}
//         </h2>
//         <p className="text-gray-700 text-lg mb-2">
//           <strong>Origin:</strong> {updatedProduct.originCountry}
//         </p>
//         <p className="text-gray-700 text-lg mb-2">
//           <strong>Price:</strong> ${updatedProduct.price}
//         </p>
//         <p className="text-gray-700 text-lg mb-2">
//           <strong>Available Quantity:</strong> {updatedProduct.quantity}
//         </p>
//         <p className="text-gray-700 text-lg mb-6">
//           <strong>Rating:</strong> {updatedProduct.rating} ⭐
//         </p>
//         <button
//           onClick={() => setShowModal(true)}
//           className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition"
//         >
//           Import Now
//         </button>
//       </div>

//       {/* ✅ Import Modal */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
//           <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
//             <h3 className="text-xl font-semibold mb-4">Import Product</h3>

//             <input
//               type="number"
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//               placeholder="Enter quantity"
//               className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//             />

//             <button
//               onClick={handleImport}
//               disabled={
//                 quantity > updatedProduct.quantity || quantity <= 0 || loading
//               }
//               className={`w-full py-2 rounded-lg text-white font-semibold ${
//                 quantity > updatedProduct.quantity || quantity <= 0
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-purple-700 hover:bg-purple-800"
//               }`}
//             >
//               {loading ? "Importing..." : "Submit"}
//             </button>

//             <button
//               onClick={() => setShowModal(false)}
//               className="w-full mt-3 py-2 rounded-lg border border-purple-700 text-purple-700 hover:bg-purple-100"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;
//-----------------------------------------
// import React, { useState } from "react";
// import { useLoaderData } from "react-router";

// const ProductDetails = () => {
//   const product = useLoaderData();
//   const [showModal, setShowModal] = useState(false);
//   const [quantity, setQuantity] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [updatedProduct, setUpdatedProduct] = useState(product);

//   const handleImport = async () => {
//     const importQty = parseInt(quantity);
//     if (importQty <= 0 || importQty > updatedProduct.quantity) {
//       alert("Invalid quantity!");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch(
//         `http://localhost:3000/import/user123`, // userId static for testing
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             productId: updatedProduct._id,
//             importQuantity: importQty,
//           }),
//         }
//       );

//       const data = await res.json();

//       if (res.ok && data.success) {
//         alert("Product imported successfully!");

//         // Frontend quantity update
//         setUpdatedProduct({
//           ...updatedProduct,
//           quantity: updatedProduct.quantity - importQty,
//         });

//         // Clear input & close modal
//         setQuantity("");
//         setShowModal(false);
//       } else {
//         alert(data.message || "Failed to import product");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Error importing product!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl md:flex gap-7 mx-auto p-6">
//       <div>
//         <img
//           src={updatedProduct.image}
//           alt={updatedProduct.name}
//           className="w-96 h-80 object-cover rounded-lg shadow-lg mb-6"
//         />
//       </div>
//       <div>
//         <h2 className="text-3xl font-bold text-purple-900 mb-2">
//           {updatedProduct.name}
//         </h2>
//         <p className="text-gray-700 text-lg mb-2">
//           <strong>Origin:</strong> {updatedProduct.originCountry}
//         </p>
//         <p className="text-gray-700 text-lg mb-2">
//           <strong>Price:</strong> ${updatedProduct.price}
//         </p>
//         <p className="text-gray-700 text-lg mb-2">
//           <strong>Available Quantity:</strong> {updatedProduct.quantity}
//         </p>
//         <p className="text-gray-700 text-lg mb-6">
//           <strong>Rating:</strong> {updatedProduct.rating} ⭐
//         </p>
//         <button
//           onClick={() => setShowModal(true)}
//           className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition"
//         >
//           Import Now
//         </button>
//       </div>

//       {/* ✅ Import Modal */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
//           <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
//             <h3 className="text-xl font-semibold mb-4">Import Product</h3>

//             <input
//               type="number"
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//               placeholder="Enter quantity"
//               className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//             />

//             <button
//               onClick={handleImport}
//               disabled={
//                 quantity <= 0 || quantity > updatedProduct.quantity || loading
//               }
//               className={`w-full py-2 rounded-lg text-white font-semibold ${
//                 quantity <= 0 || quantity > updatedProduct.quantity
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-purple-700 hover:bg-purple-800"
//               }`}
//             >
//               {loading ? "Importing..." : "Submit"}
//             </button>

//             <button
//               onClick={() => setShowModal(false)}
//               className="w-full mt-3 py-2 rounded-lg border border-purple-700 text-purple-700 hover:bg-purple-100"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;
//--------------------------------
import React, { useState } from "react";
import { useLoaderData } from "react-router";

const ProductDetails = () => {
  const product = useLoaderData();
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleImport = async () => {
    const importQty = parseInt(quantity);
    if (importQty <= 0 || importQty > updatedProduct.quantity) {
      alert("Invalid quantity!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/import/user123`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: updatedProduct._id,
          importQuantity: importQty,
        }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        alert("Product imported successfully!");
        setUpdatedProduct({
          ...updatedProduct,
          quantity: updatedProduct.quantity - importQty,
        });
        setQuantity("");
        setShowModal(false);
      } else {
        alert(data.message || "Failed to import product");
      }
    } catch (err) {
      console.error(err);
      alert("Error importing product!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl md:flex gap-7 mx-auto p-6">
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
          <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Import Product</h3>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter quantity"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
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
