import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthProvider";

const MyExports = () => {
  const { user } = useContext(AuthContext);
  const [exports, setExports] = useState([]);
  const [selectedExport, setSelectedExport] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({});

  const fetchExports = async () => {
    if (!user?.email) return;
    try {
      const res = await fetch(
        `https://ph-assignment-10-server-self.vercel.app/my-exports/${user.email}`
      );
      const data = await res.json();
      setExports(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load exports");
    }
  };

  useEffect(() => {
    fetchExports();
  }, [user]);

  const openDeleteModal = (exp) => setDeleteTarget(exp);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      const res = await fetch(
        `https://ph-assignment-10-server-self.vercel.app/my-exports/${deleteTarget._id}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      if (res.ok) {
        setExports(exports.filter((exp) => exp._id !== deleteTarget._id));
        setDeleteTarget(null);
        setShowSuccessModal(true);
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
        `https://ph-assignment-10-server-self.vercel.app/my-exports/${selectedExport._id}`,
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
            exp._id === selectedExport._id ? { ...exp, ...formData } : exp
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
      <h2 className="text-3xl text-center font-bold mb-6 text-purple-900">
        My Exports ({exports.length})
      </h2>

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
                onClick={() => openDeleteModal(exp)}
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

      {deleteTarget && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Remove Export
            </h3>
            <p className="text-gray-600 mb-5">
              Are you sure you want to delete
              <span className="font-bold">{deleteTarget.name}</span>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setDeleteTarget(null)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedExport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleUpdateSubmit}
            className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full space-y-3"
          >
            <h3 className="text-xl font-semibold text-center mb-2">
              Update Product
            </h3>
            {[
              "name",
              "image",
              "price",
              "originCountry",
              "rating",
              "quantity",
            ].map((field) => (
              <input
                key={field}
                type={
                  field === "price" ||
                  field === "rating" ||
                  field === "quantity"
                    ? "number"
                    : "text"
                }
                name={field}
                value={formData[field]}
                onChange={handleUpdateChange}
                className="w-full border px-3 py-2 rounded-lg"
                required
              />
            ))}
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
