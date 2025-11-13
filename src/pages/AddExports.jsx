// import React, { useState, useContext } from "react";
// import { toast } from "react-toastify";
// import { AuthContext } from "../Context/AuthProvider"; // 🔹 Auth context import

// const AddExports = () => {
//   const { user } = useContext(AuthContext); // 🔹 লগইন ইউজার ধরবে
//   const [formData, setFormData] = useState({
//     name: "",
//     image: "",
//     price: "",
//     originCountry: "",
//     rating: "",
//     quantity: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user?.email) {
//       toast.error("Please login first!");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/add-exports", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, email: user.email }), // ✅ user email পাঠানো
//       });

//       const data = await res.json();

//       if (res.ok) {
//         toast.success("✅ Product added successfully!");
//         setFormData({
//           name: "",
//           image: "",
//           price: "",
//           originCountry: "",
//           rating: "",
//           quantity: "",
//         });
//       } else {
//         toast.error(data.message || "Failed to add product");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Error adding product");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6">
//       <title>AddExports</title>
//       <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
//         Add Export
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white border border-gray-300 shadow-lg rounded-xl p-6 space-y-4"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Product Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="w-full border dark:bg-gray-300 px-4 py-2 rounded-lg"
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Image URL"
//           value={formData.image}
//           onChange={handleChange}
//           required
//           className="w-full border dark:bg-gray-300 px-4 py-2 rounded-lg"
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           value={formData.price}
//           onChange={handleChange}
//           required
//           className="w-full border dark:bg-gray-300 px-4 py-2 rounded-lg"
//         />
//         <input
//           type="text"
//           name="originCountry"
//           placeholder="Origin Country"
//           value={formData.originCountry}
//           onChange={handleChange}
//           required
//           className="w-full border dark:bg-gray-300 px-4 py-2 rounded-lg"
//         />
//         <input
//           type="number"
//           name="rating"
//           placeholder="Rating (1-5)"
//           value={formData.rating}
//           onChange={handleChange}
//           required
//           className="w-full border dark:bg-gray-300 px-4 py-2 rounded-lg"
//         />
//         <input
//           type="number"
//           name="quantity"
//           placeholder="Available Quantity"
//           value={formData.quantity}
//           onChange={handleChange}
//           required
//           className="w-full border dark:bg-gray-300 px-4 py-2 rounded-lg"
//         />

//         <button
//           type="submit"
//           className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition"
//         >
//           Add Export
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddExports;
//-------------------------------------
// import React, { useState, useContext } from "react";
// import { toast } from "react-toastify";
// // import { AuthContext } from "";
// import { AuthContext } from "../Context/AuthProvider";

// const AddExports = () => {
//   const { user } = useContext(AuthContext);
//   const [formData, setFormData] = useState({
//     name: "",
//     image: "",
//     price: "",
//     originCountry: "",
//     rating: "",
//     quantity: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/add-exports", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ ...formData, userId: user?.email || "user123" }),
//     });
//     const data = await response.json();

//     if (response.ok) {
//       toast.success("Product added successfully!");
//       setFormData({
//         name: "",
//         image: "",
//         price: "",
//         originCountry: "",
//         rating: "",
//         quantity: "",
//       });
//     } else {
//       toast.error(data.message || "Failed to add product");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
//         Add Export
//       </h2>
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-xl shadow-lg space-y-4"
//       >
//         {["name", "image", "price", "originCountry", "rating", "quantity"].map(
//           (field) => (
//             <input
//               key={field}
//               type={
//                 field === "price" || field === "rating" || field === "quantity"
//                   ? "number"
//                   : "text"
//               }
//               name={field}
//               placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//               value={formData[field]}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-lg"
//               required
//             />
//           )
//         )}
//         <button
//           type="submit"
//           className="w-full bg-purple-700 text-white py-2 rounded-lg"
//         >
//           Add Export
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddExports;
//-----------------------------
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthProvider";

const AddExports = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    originCountry: "",
    rating: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.email) {
      toast.error("Please login first!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/add-exports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userId: user.email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("✅ Product added successfully!");
        setFormData({
          name: "",
          image: "",
          price: "",
          originCountry: "",
          rating: "",
          quantity: "",
        });
      } else {
        toast.error(data.message || "Failed to add product");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error adding product");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
        Add Export
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg space-y-4"
      >
        {["name", "image", "price", "originCountry", "rating", "quantity"].map(
          (field) => (
            <input
              key={field}
              type={
                field === "price" || field === "rating" || field === "quantity"
                  ? "number"
                  : "text"
              }
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg"
              required
            />
          )
        )}
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded-lg"
        >
          Add Export
        </button>
      </form>
    </div>
  );
};

export default AddExports;
