import usaExporter from "../assets/images (5).jpeg";
import germanyExporter from "../assets/images (6).jpeg";
import indiaExporter from "../assets/hand-drawn-import-export-graphics_23-2149164081.avif";
import chinaExporter from "../assets/Global-China-Hub-logo-color-1024x578.png";

const FeaturedExporters = () => {
  const exporters = [
    { name: "Global Trade Co.", country: "USA", img: usaExporter },
    { name: "Euro Exporters", country: "Germany", img: germanyExporter },
    { name: "Bharat Exports", country: "India", img: indiaExporter },
    { name: "China Global Hub", country: "China", img: chinaExporter },
  ];

  return (
    <section className="px-5 lg:px-20 py-16 dark:bg-black">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-purple-700">
        Featured Exporters
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {exporters.map((exporter, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-300 rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="overflow-hidden ">
              <img
                src={exporter.img}
                alt={exporter.name}
                className="w-full h-48 object-cover p-3 rounded-2xl transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {exporter.name}
              </h3>
              <p className="text-gray-500">{exporter.country}</p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/90 to-transparent"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedExporters;
