import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MyExports = () => {
  const [exports, setExports] = useState([]);
  const [selectedExport, setSelectedExport] = useState(null); // for update modal
  const [formData, setFormData] = useState({});
  const userId = "user123";

  const fetchExports = async () => {
    try {
      const res = await fetch(`http://localhost:5000/my-exports/${userId}`);
      const data = await res.json();
      setExports(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load exports");
    }
  };

  useEffect(() => {
    fetchExports();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/my-exports/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setExports(exports.filter((exp) => exp._id !== id));
        toast.success("Export deleted successfully!");
      } else {
        toast.error(data.message || "Delete failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error deleting export");
    }
  };

  const openUpdateModal = (exp) => {
    setSelectedExport(exp);
    setFormData(exp);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:5000/my-exports/${selectedExport._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setExports(
          exports.map((exp) =>
            exp._id === selectedExport._id ? formData : exp
          )
        );
        setSelectedExport(null);
        toast.success("Export updated successfully!");
      } else {
        toast.error(data.message || "Update failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error updating export");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <title>MyExports</title>
      <h2 className="text-3xl font-bold mb-6 text-purple-900">My Exports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exports.map((exp) => (
          <div
            key={exp._id}
            className="border rounded-lg shadow-lg p-4 flex flex-col justify-between"
          >
            <img
              src={exp.image}
              alt={exp.name}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-semibold">{exp.name}</h3>
            <p>
              <strong>Price:</strong> ${exp.price}
            </p>
            <p>
              <strong>Origin:</strong> {exp.originCountry}
            </p>
            <p>
              <strong>Rating:</strong> {exp.rating} ⭐
            </p>
            <p>
              <strong>Available:</strong> {exp.quantity}
            </p>
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => handleDelete(exp._id)}
                className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
              >
                Delete
              </button>
              <button
                onClick={() => openUpdateModal(exp)}
                className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* ✅ Update Modal */}
      {selectedExport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleUpdateSubmit}
            className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full space-y-3"
          >
            <h3 className="text-xl font-semibold text-center mb-2">
              Update Product
            </h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleUpdateChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleUpdateChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleUpdateChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
            <input
              type="text"
              name="originCountry"
              value={formData.originCountry}
              onChange={handleUpdateChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleUpdateChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleUpdateChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
            <div className="flex justify-center gap-3 mt-3">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setSelectedExport(null)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyExports;
