// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";

// const MyImports = () => {
//   const [imports, setImports] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedImport, setSelectedImport] = useState(null);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const navigate = useNavigate();
//   const userId = "user123";

//   const fetchImports = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`http://localhost:5000/my-imports/${userId}`);
//       const data = await res.json();
//       setImports(data);
//     } catch (err) {
//       console.error(err);
//       // alert("Failed to fetch imports!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchImports();
//   }, []);

//   const handleRemove = async () => {
//     if (!selectedImport) return;

//     try {
//       const res = await fetch(
//         `http://localhost:5000/my-imports/${selectedImport._id}`,
//         { method: "DELETE" }
//       );
//       const data = await res.json();
//       if (res.ok) {
//         setImports(imports.filter((imp) => imp._id !== selectedImport._id));
//         setShowSuccessModal(true);
//         setSelectedImport(null);
//       } else {
//         console.log(data.message || "Failed to remove import");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   if (loading) return <p className="text-center mt-10">Loading...</p>;
//   if (imports.length === 0)
//     return <p className="text-center mt-10">No imports found!</p>;

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <title>MyImports</title>
//       <h2 className="text-3xl font-bold mb-6 text-purple-900">
//         My Imports({imports.length})
//       </h2>
//       <div className="grid space-y-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {imports.map((imp) => (
//           <div
//             key={imp._id}
//             className="border rounded-lg shadow-lg p-4 flex flex-col justify-between"
//           >
//             <img
//               src={imp.image}
//               alt={imp.name}
//               className="w-full h-48 object-cover rounded-lg mb-3"
//             />
//             <h3 className="text-xl font-semibold">{imp.name}</h3>
//             <p>
//               <strong>Price:</strong> ${imp.price}
//             </p>
//             <p>
//               <strong>Origin:</strong> {imp.originCountry}
//             </p>
//             <p>
//               <strong>Rating:</strong> {imp.rating} ⭐
//             </p>
//             <p>
//               <strong>Imported Quantity:</strong> {imp.importedQuantity}
//             </p>
//             <div className="mt-3 flex gap-2">
//               <button
//                 onClick={() => setSelectedImport(imp)}
//                 className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
//               >
//                 Remove
//               </button>
//               <button
//                 onClick={() => navigate(`/product/${imp.productId}`)}
//                 className="bg-purple-700 text-white px-3 py-1 rounded-lg hover:bg-purple-800 transition"
//               >
//                 See Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedImport && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center">
//             <h3 className="text-xl font-semibold text-gray-800 mb-3">
//               Remove Import
//             </h3>
//             <p className="text-gray-600 mb-5">
//               Are you sure you want to remove{" "}
//               <span className="font-bold">{selectedImport.name}</span>?
//             </p>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={handleRemove}
//                 className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
//               >
//                 Yes, Remove
//               </button>
//               <button
//                 onClick={() => setSelectedImport(null)}
//                 className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showSuccessModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center animate-fadeIn">
//             <h3 className="text-2xl font-semibold text-green-700 mb-3">
//               ✅ Successfully Deleted!
//             </h3>
//             <p className="text-gray-600 mb-5">
//               The import item has been removed from your list.
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
//     </div>
//   );
// };

// export default MyImports;
//----------------------------------
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";

// const MyImports = () => {
//   const [imports, setImports] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedImport, setSelectedImport] = useState(null);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const navigate = useNavigate();
//   const userId = "user123";

//   // Fetch imports
//   const fetchImports = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`http://localhost:5000/my-imports/${userId}`);
//       const data = await res.json();
//       setImports(data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchImports();
//   }, []);

//   // Delete function
//   // const handleRemove = async () => {
//   //   if (!selectedImport) return;

//   //   try {
//   //     const res = await fetch(
//   //       `http://localhost:5000/my-imports/${selectedImport._id}/${userId}`,
//   //       { method: "DELETE" }
//   //     );
//   //     const data = await res.json();
//   //     if (res.ok && data.success) {
//   //       // Update imports list
//   //       setImports(imports.filter((imp) => imp._id !== selectedImport._id));
//   //       setSelectedImport(null); // Close confirmation modal
//   //       setShowSuccessModal(true); // Open success modal
//   //     } else {
//   //       console.log(data.message || "Failed to remove import");
//   //     }
//   //   } catch (err) {
//   //     console.error(err);
//   //   }
//   // };
//   const handleRemove = async () => {
//     if (!selectedImport) return;

//     try {
//       const res = await fetch(
//         `http://localhost:5000/my-imports/${selectedImport._id}/${userId}`,
//         { method: "DELETE" }
//       );
//       const data = await res.json();
//       if (res.ok && data.success) {
//         setImports(imports.filter((imp) => imp._id !== selectedImport._id));
//         setSelectedImport(null);
//         setShowSuccessModal(true);
//       } else {
//         console.log(data.message || "Failed to remove import");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   if (loading) return <p className="text-center mt-10">Loading...</p>;
//   if (imports.length === 0)
//     return <p className="text-center mt-10">No imports found!</p>;

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <title>MyImports</title>
//       <h2 className="text-3xl font-bold mb-6 text-purple-900">
//         My Imports ({imports.length})
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {imports.map((imp) => (
//           <div
//             key={imp._id}
//             className="border rounded-lg shadow-lg p-4 flex flex-col justify-between"
//           >
//             <img
//               src={imp.image}
//               alt={imp.name}
//               className="w-full h-48 object-cover rounded-lg mb-3"
//             />
//             <h3 className="text-xl font-semibold">{imp.name}</h3>
//             <p>
//               <strong>Price:</strong> ${imp.price}
//             </p>
//             <p>
//               <strong>Origin:</strong> {imp.originCountry}
//             </p>
//             <p>
//               <strong>Rating:</strong> {imp.rating} ⭐
//             </p>
//             <p>
//               <strong>Imported Quantity:</strong> {imp.importedQuantity}
//             </p>
//             <div className="mt-3 flex gap-2">
//               <button
//                 onClick={() => setSelectedImport(imp)}
//                 className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
//               >
//                 Remove
//               </button>
//               <button
//                 onClick={() => navigate(`/product/${imp.productId}`)}
//                 className="bg-purple-700 text-white px-3 py-1 rounded-lg hover:bg-purple-800 transition"
//               >
//                 See Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Confirmation Modal */}
//       {selectedImport && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center">
//             <h3 className="text-xl font-semibold text-gray-800 mb-3">
//               Remove Import
//             </h3>
//             <p className="text-gray-600 mb-5">
//               Are you sure you want to remove{" "}
//               <span className="font-bold">{selectedImport.name}</span>?
//             </p>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={handleRemove}
//                 className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
//               >
//                 Yes, Remove
//               </button>
//               <button
//                 onClick={() => setSelectedImport(null)}
//                 className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center animate-fadeIn">
//             <h3 className="text-2xl font-semibold text-green-700 mb-3">
//               ✅ Successfully Deleted!
//             </h3>
//             <p className="text-gray-600 mb-5">
//               The import item has been removed from your list.
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
//     </div>
//   );
// };

// export default MyImports;
//-----------------------------------------------
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const MyImports = () => {
  const [imports, setImports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImport, setSelectedImport] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();
  const userId = "user123";

  const fetchImports = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/my-imports/${userId}`);
      const data = await res.json();
      setImports(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImports();
  }, []);

  // Remove import
  const handleRemove = async () => {
    if (!selectedImport) return;
    try {
      const res = await fetch(
        `http://localhost:5000/my-imports/${selectedImport._id}/${userId}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      if (res.ok && data.success) {
        setImports(imports.filter((imp) => imp._id !== selectedImport._id));
        setSelectedImport(null);
        setShowSuccessModal(true);
      } else {
        console.log(data.message || "Failed to remove import");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!loading && imports.length === 0)
    return <p className="text-center mt-10">No imports found!</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <title>MyImports</title>
      <h2 className="text-3xl text-center font-bold mb-6 text-purple-700">
        My Imports ({imports.length})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                onClick={() => setSelectedImport(imp)}
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

      {/* Delete confirmation modal */}
      {selectedImport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Remove Import
            </h3>
            <p className="text-gray-600 mb-5">
              Are you sure you want to remove{" "}
              <span className="font-bold">{selectedImport.name}</span>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleRemove}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Yes, Remove
              </button>
              <button
                onClick={() => setSelectedImport(null)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">
              ✅ Successfully Deleted!
            </h3>
            <p className="text-gray-600 mb-5">
              The import item has been removed from your list.
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
    </div>
  );
};

export default MyImports;
