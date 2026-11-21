import Image from "next/image";


const Products = () => {
  return (
    <>
      <div className="bg-[#E5F4F78C] px-5 lg:px-20 py-10 text-center space-y-4" id="products">
        <h5 className="text-[#15A4C1] text-xl uppercase font-medium">
          Our Products
        </h5>
        <h6 className="font-semibold text-3xl">
          High-Performance Die Casting Molds
        </h6>
        <p className="text-[17px]">
          We manufacture all kinds of aluminum die casting products and its
          mold, jigs, fixtures, <br />
          dies and tools and any other engineering products as per client
          requirements.
        </p>
        <div className="md:flex gap-10 justify-center items-center mt-10">
          <div className="overflow-hidden rounded-2xl bg-white group">
            <div className="overflow-hidden">
              <Image
                src="/prod3.png"
                alt="prod3"
                width={300}
                height={350}
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
              />
            </div>
            <div className="py-5 px-4">
              <h5 className="text-xl font-semibold text-left">
                Precision Die Casting Mould
              </h5>
              <p className="text-left mt-2">
                Engineered multi-cavity die casting mould for efficient and
                precise metal casting with smooth finishing and consistent
                output.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white group mt-7 lg:mt-0">
            <div className="overflow-hidden">
              <Image
                src="/prod4.png"
                alt="prod4"
                width={300}
                height={350}
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
              />
            </div>
            <div className="py-5 px-4">
              <h5 className="text-xl font-semibold text-left">
                Multi-Cavity Die Casting Mould
              </h5>
              <p className="text-left mt-2">
                Engineered multi-cavity die casting mould for high-volume
                production with consistent accuracy and superior surface finish.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white group mt-7 lg:mt-0">
            <div className="overflow-hidden">
              <Image
                src="/prod5.png"
                alt="prod5"
                width={300}
                height={350}
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
              />
            </div>
            <div className="py-5 px-4">
              <h5 className="text-xl font-semibold text-left">
                Custom Die Casting Mold
              </h5>
              <p className="text-left mt-2">
                Robust die casting mold built for shaping intricate metal
                components with high strength, heat resistance, and long service
                life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
