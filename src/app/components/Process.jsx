import { Building, Earth, TestTubeDiagonal, Zap } from "lucide-react";

const Process = () => {
  return (
    <>
      <div className="py-10 px-5 lg:px-20 text-center space-y-4">
        <h5 className="text-[#15A4C1] text-xl uppercase font-medium">
          Our Process
        </h5>
        <h6 className="font-semibold text-3xl">From Design to Production</h6>
        <div className="mt-10 grid md:grid-cols-2 items-stretch lg:grid-cols-4 gap-5 justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-5 p-5 rounded-xl transition-all duration-300 group border-[1px] border-[#0000001A] shadow-[0px_4px_4px_-4px] shadow-[#000000a6] hover:border-[#01D4FF] hover:shadow-[0px_5px_8px_-4px] hover:shadow-[#a7f0ff]">
            <div className="p-3 bg-[#E5F4F7] rounded-md transition-all duration-300 group-hover:bg-[#BFE5EC]">
              <Zap size={30} className="text-[#15A4C1]" />
            </div>
            <div>
              <h3 className="text-lg font-bold">High Pressure Casting</h3>
              <p className="mt-3">
                Our molds are built to withstand extreme pressure conditions
                used in die casting processes.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 p-5 rounded-xl transition-all duration-300 group border-[1px] border-[#0000001A] shadow-[0px_4px_4px_-4px] shadow-[#000000a6] hover:border-[#01D4FF] hover:shadow-[0px_5px_8px_-4px] hover:shadow-[#a7f0ff]">
            <div className="p-3 bg-[#E5F4F7] rounded-md transition-all duration-300 group-hover:bg-[#BFE5EC]">
              <TestTubeDiagonal size={30} className="text-[#15A4C1]" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Strict Quality Testing</h3>
              <p className="mt-3">
                Every mold undergoes rigorous inspection and testing to meet
                industry standards.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 p-5 rounded-xl transition-all duration-300 group border-[1px] border-[#0000001A] shadow-[0px_4px_4px_-4px] shadow-[#000000a6] hover:border-[#01D4FF] hover:shadow-[0px_5px_8px_-4px] hover:shadow-[#a7f0ff]">
            <div className="p-3 bg-[#E5F4F7] rounded-md transition-all duration-300 group-hover:bg-[#BFE5EC]">
              <Earth size={30} className="text-[#15A4C1]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Wide Industrial Applications
              </h3>
              <p>
                Our molds are used across automotive, electronics, and
                manufacturing industries.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 p-5 rounded-xl transition-all duration-300 group border-[1px] border-[#0000001A] shadow-[0px_4px_4px_-4px] shadow-[#000000a6] hover:border-[#01D4FF] hover:shadow-[0px_5px_8px_-4px] hover:shadow-[#a7f0ff]">
            <div className="p-3 bg-[#E5F4F7] rounded-md transition-all duration-300 group-hover:bg-[#BFE5EC]">
              <Building size={30} className="text-[#15A4C1]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Custom Mold Solutions</h3>
              <p>
                We offer tailor-made die casting molds based on your specific
                production requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
