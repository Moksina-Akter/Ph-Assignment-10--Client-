// MyImports.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { useNavigate } from "react-router-dom";

const MyImports = () => {
  const [imports, setImports] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userId = "user123"; // পরবর্তীতে auth থেকে আসবে

  // Fetch imports
  const fetchImports = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/my-imports/${userId}`);
      const data = await res.json();
      setImports(data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch imports");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImports();
  }, []);

  // Delete import
  const handleRemove = async (id) => {
    if (!window.confirm("Are you sure you want to remove this import?")) return;

    try {
      const res = await fetch(`http://localhost:3000/my-imports/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        alert("Import removed successfully!");
        setImports(imports.filter((imp) => imp._id !== id));
      } else {
        alert(data.message || "Failed to remove import");
      }
    } catch (err) {
      console.error(err);
      alert("Error removing import");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (imports.length === 0)
    return <p className="text-center mt-10">No imports found!</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-purple-900">My Imports</h2>
      <div className="grid space-y-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {imports.map((imp) => (
          <div
            key={imp._id}
            className="border rounded-lg shadow-lg p-4 flex flex-col justify-between"
          >
            <img
              src={imp.image}
              alt={imp.name}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-semibold">{imp.name}</h3>
            <p>
              <strong>Price:</strong> ${imp.price}
            </p>
            <p>
              <strong>Origin:</strong> {imp.originCountry}
            </p>
            <p>
              <strong>Rating:</strong> {imp.rating} ⭐
            </p>
            <p>
              <strong>Imported Quantity:</strong> {imp.importedQuantity}
            </p>
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => handleRemove(imp._id)}
                className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
              >
                Remove
              </button>
              <button
                onClick={() => navigate(`/product/${imp.productId}`)}
                className="bg-purple-700 text-white px-3 py-1 rounded-lg hover:bg-purple-800 transition"
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyImports;
