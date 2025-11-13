const Testimonials = () => {
  return (
    <section className="py-10 px-5 lg:px-20  dark:bg-black text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-10">
        What Our Users Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-purple-50  rounded-lg p-6 shadow-md hover:shadow-lg transition">
          <p className="text-gray-700 ">
            “This platform helped me manage my export orders faster!”
          </p>
          <h4 className="font-semibold mt-4 text-purple-700">— Rafi, Dhaka</h4>
        </div>
        <div className="bg-purple-50  rounded-lg p-6 shadow-md hover:shadow-lg transition">
          <p className="text-gray-700 ">
            “Found trustworthy suppliers easily. Highly recommended!”
          </p>
          <h4 className="font-semibold mt-4 text-purple-700">
            — Samia, Chittagong
          </h4>
        </div>
        <div className="bg-purple-50  rounded-lg p-6 shadow-md hover:shadow-lg transition">
          <p className="text-gray-700 ">“Clean UI and smooth performance!”</p>
          <h4 className="font-semibold mt-4 text-purple-700">
            — Hasan, Rajshahi
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
