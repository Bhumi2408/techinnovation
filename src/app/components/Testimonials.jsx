const Testimonials = () => {
  return (
    <>
      <div className="px-5 lg:px-24 pt-5 pb-10 lg:text-center space-y-4">
        <h5 className="text-[#15A4C1] text-xl uppercase font-medium">
          TESTIMONIALS
        </h5>
        <h6 className="font-semibold text-3xl">What Our Clients Say</h6>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left md:grid-cols-2 lg:grid-cols-3">
          <div className="flex h-full flex-col items-start justify-start gap-5 rounded-xl border border-[#0000001A] p-5 transition-all duration-300 group shadow-[0px_4px_4px_-4px] shadow-[#000000a6] hover:border-[#01D4FF] hover:shadow-[0px_5px_8px_-4px] hover:shadow-[#a7f0ff]">
            <h3 className="text-lg font-bold">Rajesh Sharma</h3>
            <p >
             The quality of molds we received was outstanding. Precision and finishing were exactly as promised. Highly reliable team and great service.
            </p>
          </div>

          <div className="flex h-full flex-col items-start justify-start gap-5 rounded-xl border border-[#0000001A] p-5 transition-all duration-300 group shadow-[0px_4px_4px_-4px] shadow-[#000000a6] hover:border-[#01D4FF] hover:shadow-[0px_5px_8px_-4px] hover:shadow-[#a7f0ff]">
            <h3 className="text-lg font-bold">Amit Verma</h3>
            <p>
              Their attention to detail and engineering expertise is impressive. The molds performed perfectly in our production line.
            </p>
          </div>

          <div className="flex h-full flex-col items-start justify-start gap-5 rounded-xl border border-[#0000001A] p-5 transition-all duration-300 group shadow-[0px_4px_4px_-4px] shadow-[#000000a6] hover:border-[#01D4FF] hover:shadow-[0px_5px_8px_-4px] hover:shadow-[#a7f0ff]">
            <h3 className="text-lg font-bold">Neha Gupta</h3>
            <p >
              Very professional company with excellent support. They delivered our custom mold on time without compromising quality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
