import {
  CircleCheck,
  Headphones,
  Headset,
  Microchip,
  Ship,
  Truck,
  UserCog,
  Wrench,
} from "lucide-react";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <>
      <div className="px-5 lg:px-24 py-10 lg:text-center space-y-4">
        <h5 className="text-[#15A4C1] text-xl uppercase font-medium">
          WHY CHOOSE US
        </h5>
        <h6 className="font-semibold text-2xl">
          Your Trusted Partner in Precision Die Casting Molds
        </h6>
        <p className="text-[15px]">
          We have the eyes of a trendsetter and also value time. We help our
          clients get the latest yet affordable designs and fabrication to suit
          their business. <br />
          We believe that Conventional Thinking delivers Conventional Results.
          We are ‘different’. We are out-of-the-box. <br />
          We believe that the most useful tool in strategic and creative
          development is intuition and we foster an environment in which
          intuitive skills are positively encouraged and nurtured. <br />
          Our team of experienced professionals focuson creating, fabricating
          and implementing high impact, cost effective products
        </p>
        <div className="mt-10 grid grid-cols-1 gap-5 text-left md:grid-cols-2 lg:grid-cols-3">
          <div className="flex h-full flex-col items-start justify-start gap-5 rounded-xl border border-[#0000001A] p-5 transition-all duration-300 group shadow-[0px_4px_4px_-4px] shadow-[#000000a6] hover:border-[#01D4FF] hover:shadow-[0px_5px_8px_-4px] hover:shadow-[#a7f0ff]">
            <div className="p-3 bg-[#E5F4F7] rounded-md transition-all duration-300 group-hover:bg-[#BFE5EC]">
              <Microchip size={30} className="text-[#15A4C1]" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Advanced Technology</h3>
              <p className="mt-3">
                We use modern machinery and latest techniques to ensure high
                precision and efficiency.
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col items-start justify-start gap-5 rounded-xl border border-[#0000001A] p-5 transition-all duration-300 group shadow-[0px_4px_4px_-4px] shadow-[#000000a6] hover:border-[#01D4FF] hover:shadow-[0px_5px_8px_-4px] hover:shadow-[#a7f0ff]">
            <div className="p-3 bg-[#E5F4F7] rounded-md transition-all duration-300 group-hover:bg-[#BFE5EC]">
              <UserCog size={30} className="text-[#15A4C1]" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Expert Engineering Team</h3>
              <p className="mt-3">
                Our experienced engineers design molds with accuracy and
                innovation.
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col items-start justify-start gap-5 rounded-xl border border-[#0000001A] p-5 transition-all duration-300 group shadow-[0px_4px_4px_-4px] shadow-[#000000a6] hover:border-[#01D4FF] hover:shadow-[0px_5px_8px_-4px] hover:shadow-[#a7f0ff]">
            <div className="p-3 bg-[#E5F4F7] rounded-md transition-all duration-300 group-hover:bg-[#BFE5EC]">
              <CircleCheck size={30} className="text-[#15A4C1]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Strict Quality Control</h3>
              <p>
                Every mold is tested and inspected to maintain top industry
                standards.
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col items-start justify-start gap-5 rounded-xl border border-[#0000001A] p-5 transition-all duration-300 group shadow-[0px_4px_4px_-4px] shadow-[#000000a6] hover:border-[#01D4FF] hover:shadow-[0px_5px_8px_-4px] hover:shadow-[#a7f0ff]">
            <div className="p-3 bg-[#E5F4F7] rounded-md transition-all duration-300 group-hover:bg-[#BFE5EC]">
              <Truck size={30} className="text-[#15A4C1]" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Fast Delivery</h3>
              <p className="mt-3">
                Optimized production ensures timely delivery without
                compromising quality.
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col items-start justify-start gap-5 rounded-xl border border-[#0000001A] p-5 transition-all duration-300 group shadow-[0px_4px_4px_-4px] shadow-[#000000a6] hover:border-[#01D4FF] hover:shadow-[0px_5px_8px_-4px] hover:shadow-[#a7f0ff]">
            <div className="p-3 bg-[#E5F4F7] rounded-md transition-all duration-300 group-hover:bg-[#BFE5EC]">
              <Wrench size={30} className="text-[#15A4C1]" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Custom Solutions</h3>
              <p className="mt-3">
                We provide molds tailored to your exact specifications and
                production needs.
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col items-start justify-start gap-5 rounded-xl border border-[#0000001A] p-5 transition-all duration-300 group shadow-[0px_4px_4px_-4px] shadow-[#000000a6] hover:border-[#01D4FF] hover:shadow-[0px_5px_8px_-4px] hover:shadow-[#a7f0ff]">
            <div className="p-3 bg-[#E5F4F7] rounded-md transition-all duration-300 group-hover:bg-[#BFE5EC]">
              <Headset size={30} className="text-[#15A4C1]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Reliable Support</h3>
              <p>
                We offer complete assistance from design to after-sales service.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:flex gap-10 p-5 pt-10 text-left">
          <div className="flex flex-col items-stretch bg-[#F4F5F8] lg:w-[50%] sm:flex-row">
            {/* Product Image */}
            <div className="w-full lg:w-[50%] p-2.5">
              <Image
                src="/prod6.png"
                alt="Die Cast Trim Die & Runner System"
                width={300}
                height={350}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Product Content */}
            <div className="flex w-full flex-col items-start p-2.5 pb-6 lg:w-[50%]">
              <h4 className="mb-3 text-2xl font-bold pt-4 text-[#007EBB]">
                Single-Cavity High-Pressure Die Casting Mould
              </h4>

              <p className="mb-4 text-lg">
                A precision-engineered single-cavity tool designed for
                high-volume production of complex, high-tolerance industrial
                components with superior surface finish.
              </p>

              <a
                href="#contactus"
                className="mt-auto inline-block rounded-sm bg-[#6FC0D4] px-6 py-3 text-white transition-colors hover:bg-[#007EBB]"
              >
                Click Here
              </a>
            </div>
          </div>

          <div className="flex flex-col items-stretch bg-[#F4F5F8] lg:w-[50%] sm:flex-row mt-7 lg:mt-0">
            {/* Product Image */}
            <div className="w-full lg:w-[50%] p-2.5">
              <Image
                src="/prod7.png"
                alt="Die Cast Trim Die & Runner System"
                width={300}
                height={350}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Product Content */}
            <div className="flex w-full flex-col items-start p-2.5 pb-6 lg:w-[50%] ">
              <h4 className="mb-3 text-2xl pt-4 font-bold text-[#007EBB]">
                Multi-Cavity Hot Chamber Die Casting Mould
              </h4>

              <p className="mb-4 text-lg">
                An advanced multi-cavity configuration featuring integrated
                runner systems for efficient, simultaneous production of
                identical metallic parts.
              </p>

              <a
                href="#contactus"
                className="mt-auto inline-block rounded-sm bg-[#6FC0D4] px-6 py-3 text-white transition-colors hover:bg-[#007EBB]"
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
