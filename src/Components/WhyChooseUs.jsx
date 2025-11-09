import img1 from "../assets/img1.avif";
const WhyChooseUs = () => {
  return (
    <section className="px-5 lg:px-20 py-16 bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-red-600">
        Featured Exporters
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-5 rounded-lg shadow-lg hover:scale-105 transform transition">
          <img src={img1} className="w-full h-40 object-cover rounded-md" />
          <h3 className="text-lg font-semibold mt-3">Exporter 1</h3>
          <p className="text-gray-600">USA</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg hover:scale-105 transform transition">
          <img src={img1} className="w-full h-40 object-cover rounded-md" />
          <h3 className="text-lg font-semibold mt-3">Exporter 2</h3>
          <p className="text-gray-600">Germany</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg hover:scale-105 transform transition">
          <img src={img1} className="w-full h-40 object-cover rounded-md" />
          <h3 className="text-lg font-semibold mt-3">Exporter 3</h3>
          <p className="text-gray-600">India</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg hover:scale-105 transform transition">
          <img src={img1} className="w-full h-40 object-cover rounded-md" />
          <h3 className="text-lg font-semibold mt-3">Exporter 4</h3>
          <p className="text-gray-600">China</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
