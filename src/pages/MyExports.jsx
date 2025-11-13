// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";

// const MyExports = () => {
//   const [exports, setExports] = useState([]);
//   const [selectedExport, setSelectedExport] = useState(null); // for update modal
//   const [deleteTarget, setDeleteTarget] = useState(null); // for delete confirmation modal
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [formData, setFormData] = useState({});
//   const userId = "user123";

//   // Fetch exports
//   const fetchExports = async () => {
//     try {
//       const res = await fetch(`http://localhost:5000/my-exports/${userId}`);
//       const data = await res.json();
//       setExports(data);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to load exports");
//     }
//   };

//   useEffect(() => {
//     fetchExports();
//   }, []);

//   // Open delete confirmation modal
//   const openDeleteModal = (exp) => setDeleteTarget(exp);

//   // Handle delete
//   const handleDelete = async () => {
//     if (!deleteTarget) return;
//     try {
//       const res = await fetch(
//         `http://localhost:5000/my-exports/${deleteTarget._id}`,
//         { method: "DELETE" }
//       );
//       const data = await res.json();
//       if (res.ok) {
//         setExports(exports.filter((exp) => exp._id !== deleteTarget._id));
//         setDeleteTarget(null);
//         setShowSuccessModal(true);
//       } else {
//         toast.error(data.message || "Delete failed");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Error deleting export");
//     }
//   };

//   // Open update modal
//   const openUpdateModal = (exp) => {
//     setSelectedExport(exp);
//     setFormData(exp);
//   };

//   // Handle update form change
//   const handleUpdateChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle update submit
//   const handleUpdateSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(
//         `http://localhost:5000/my-exports/${selectedExport._id}`,
//         {
//           method: "PATCH",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await res.json();
//       if (res.ok) {
//         setExports(
//           exports.map((exp) =>
//             exp._id === selectedExport._id ? { ...exp, ...formData } : exp
//           )
//         );
//         setSelectedExport(null);
//         toast.success("Export updated successfully!");
//       } else {
//         toast.error(data.message || "Update failed");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Error updating export");
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <title>MyExports</title>
//       <h2 className="text-3xl font-bold mb-6 text-purple-700">
//         My Exports ({exports.length})
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {exports.map((exp) => (
//           <div
//             key={exp._id}
//             className="border rounded-lg shadow-lg p-4 flex flex-col justify-between"
//           >
//             <img
//               src={exp.image}
//               alt={exp.name}
//               className="w-full h-48 object-cover rounded-lg mb-3"
//             />
//             <h3 className="text-xl font-semibold">{exp.name}</h3>
//             <p>
//               <strong>Price:</strong> ${exp.price}
//             </p>
//             <p>
//               <strong>Origin:</strong> {exp.originCountry}
//             </p>
//             <p>
//               <strong>Rating:</strong> {exp.rating} ⭐
//             </p>
//             <p>
//               <strong>Available:</strong> {exp.quantity}
//             </p>
//             <div className="mt-3 flex gap-2">
//               <button
//                 onClick={() => openDeleteModal(exp)}
//                 className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={() => openUpdateModal(exp)}
//                 className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
//               >
//                 Update
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Delete confirmation modal */}
//       {deleteTarget && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center">
//             <h3 className="text-xl font-semibold text-gray-800 mb-3">
//               Remove Export
//             </h3>
//             <p className="text-gray-600 mb-5">
//               Are you sure you want to delete{" "}
//               <span className="font-bold">{deleteTarget.name}</span>?
//             </p>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={handleDelete}
//                 className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
//               >
//                 Yes, Delete
//               </button>
//               <button
//                 onClick={() => setDeleteTarget(null)}
//                 className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ✅ Success modal */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center">
//             <h3 className="text-2xl font-semibold text-green-700 mb-3">
//               ✅ Successfully Deleted!
//             </h3>
//             <p className="text-gray-600 mb-5">
//               The export item has been removed from your list.
//             </p>
//             <button
//               onClick={() => setShowSuccessModal(false)}
//               className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}

//       {/* ✅ Update Modal */}
//       {selectedExport && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <form
//             onSubmit={handleUpdateSubmit}
//             className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full space-y-3"
//           >
//             <h3 className="text-xl dark:text-purple-700 font-semibold text-center mb-2">
//               Update Product
//             </h3>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleUpdateChange}
//               className="w-full border dark:bg-gray-300 px-3 py-2 rounded-lg"
//             />
//             <input
//               type="text"
//               name="image"
//               value={formData.image}
//               onChange={handleUpdateChange}
//               className="w-full border dark:bg-gray-300 px-3 py-2 rounded-lg"
//             />
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleUpdateChange}
//               className="w-full border dark:bg-gray-300 px-3 py-2 rounded-lg"
//             />
//             <input
//               type="text"
//               name="originCountry"
//               value={formData.originCountry}
//               onChange={handleUpdateChange}
//               className="w-full border dark:bg-gray-300 px-3 py-2 rounded-lg"
//             />
//             <input
//               type="number"
//               name="rating"
//               value={formData.rating}
//               onChange={handleUpdateChange}
//               className="w-full border dark:bg-gray-300 px-3 py-2 rounded-lg"
//             />
//             <input
//               type="number"
//               name="quantity"
//               value={formData.quantity}
//               onChange={handleUpdateChange}
//               className="w-full border dark:bg-gray-300 px-3 py-2 rounded-lg"
//             />
//             <div className="flex justify-center gap-3 mt-3">
//               <button
//                 type="submit"
//                 className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
//               >
//                 Submit
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setSelectedExport(null)}
//                 className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyExports;
//--------------------------------------
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MyExports = () => {
  const [exports, setExports] = useState([]);
  const [selectedExport, setSelectedExport] = useState(null); // for update modal
  const [deleteTarget, setDeleteTarget] = useState(null); // for delete confirmation modal
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({});
  const userId = "user123";

  // Fetch exports
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

  // Open delete confirmation modal
  const openDeleteModal = (exp) => setDeleteTarget(exp);

  // Handle delete
  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      const res = await fetch(
        `http://localhost:5000/my-exports/${deleteTarget._id}`,
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

  // Open update modal
  const openUpdateModal = (exp) => {
    setSelectedExport(exp);
    setFormData(exp);
  };

  // Handle update form change
  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle update submit
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
      <title>MyExports</title>
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

      {/* ✅ Delete confirmation modal */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Remove Export
            </h3>
            <p className="text-gray-600 mb-5">
              Are you sure you want to delete{" "}
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

      {/* ✅ Success modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">
              ✅ Successfully Deleted!
            </h3>
            <p className="text-gray-600 mb-5">
              The export item has been removed from your list.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* ✅ Update Modal */}
      {selectedExport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleUpdateSubmit}
            className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full space-y-3"
          >
            <h3 className="text-xl dark:text-purple-700 font-semibold text-center mb-2">
              Update Product
            </h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleUpdateChange}
              className="w-full border dark:bg-gray-300 px-3 py-2 rounded-lg"
            />
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleUpdateChange}
              className="w-full border dark:bg-gray-300 px-3 py-2 rounded-lg"
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleUpdateChange}
              className="w-full border dark:bg-gray-300 px-3 py-2 rounded-lg"
            />
            <input
              type="text"
              name="originCountry"
              value={formData.originCountry}
              onChange={handleUpdateChange}
              className="w-full border dark:bg-gray-300 px-3 py-2 rounded-lg"
            />
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleUpdateChange}
              className="w-full border dark:bg-gray-300 px-3 py-2 rounded-lg"
            />
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleUpdateChange}
              className="w-full border dark:bg-gray-300 px-3 py-2 rounded-lg"
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
