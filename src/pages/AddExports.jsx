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
      const res = await fetch(
        "https://ph-assignment-10-server-self.vercel.app/add-exports",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, userId: user.email }),
        }
      );

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
