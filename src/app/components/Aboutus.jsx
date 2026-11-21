import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Settings, Shield, Wrench } from "lucide-react";
import Image from "next/image";


const Aboutus = () => {
  return (
    <>
      <div className="lg:flex justify-center gap-7 items-center p-5 lg:py-10 lg:px-20" id="aboutus">
        <div className="lg:w-[50%] space-y-4">
          <h2 className="text-[#15A4C1] text-xl uppercase font-medium">
            About Us
          </h2>
          <h2 className=" text-2xl lg:text-4xl font-semibold">
            Precision Engineering, Built for Performance
          </h2>
          <p>
            Tech Innovation is established itself as one of the quality-based
            aluminum die casting products and its mold, jigs, fixtures, dies and
            tools. We produced our products under close supervision of the
            technical staff and go through quality checks at various levels to
            give you the best quality end product. <br />
            Tech Innovation, as a policy matter updates its manufacturing
            process at regular intervals to provide our clients with quality
            product of good standards at competitive prices. Our Manufacturing
            Team specially Mr. Pawan Kumar our proprietor has a proven record in
            manufacturing and product design with an experience of 18 year in
            this field with Bachelor Degree in Mechanical Engineering. He has a
            tremendous skills of marketing and made the enterprises to render
            its services to corporate companies. He has rich experience in
            customer service and creating a right market for product and keen
            interest in fresh product development. Whole sole in charge of
            production and high degree knowledge of industrial need by
            production, drafting and drawing. With professional teams in the
            area of manufacturing, we anticipate that we will soon be at the
            forefront of our industry. We focus our efforts on new development,
            increasing the performance like on time delivery and making changes
            in the manufacturing process to incorporate more contemporary
            machines and procedures. We look forward to combining new ideas with
            a very experienced and devoted team. We are committed to our
            customers, suppliers, and associates to become the industry
            standard, in providing the good quality products and customers’
            service. We welcome the opportunity to be associated with you by
            catering to you immediate and future requirements.
          </p>
        </div>
        <div className="lg:w-[50%] space-y-7 mt-7 lg:mt-0">
          <div className="flex justify-start items-center gap-5 p-5 rounded-xl transition-all duration-300 group border-[1px] border-[#0000001A] shadow-[0px_4px_4px_-4px] shadow-[#000000a6] hover:border-[#01D4FF] hover:shadow-[0px_5px_8px_-4px] hover:shadow-[#a7f0ff]">
            <div className="p-3 bg-[#E5F4F7] rounded-md transition-all duration-300 group-hover:bg-[#BFE5EC]">
              <Shield size={30} className="text-[#15A4C1]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">18 Year of Experience</h3>
              <p>
                Decades of excellence in precision engineering and industrial
                solutions.
              </p>
            </div>
          </div>

          <div className="flex justify-start items-center gap-5 p-5 rounded-xl transition-all duration-300 group border-[1px] border-[#0000001A] shadow-[0px_4px_4px_-4px] shadow-[#000000a6] hover:border-[#01D4FF] hover:shadow-[0px_5px_8px_-4px] hover:shadow-[#a7f0ff]">
            <div className="p-3 bg-[#E5F4F7] rounded-md transition-all duration-300 group-hover:bg-[#BFE5EC]">
              <Settings size={30} className="text-[#15A4C1]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Precision Engineering</h3>
              <p>
                We deliver high-precision die casting molds engineered for
                accuracy, consistency, and superior performance.
              </p>
            </div>
          </div>

          <div className="flex justify-start items-center gap-5 p-5 rounded-xl transition-all duration-300 group border-[1px] border-[#0000001A] shadow-[0px_4px_4px_-4px] shadow-[#000000a6] hover:border-[#01D4FF] hover:shadow-[0px_5px_8px_-4px] hover:shadow-[#a7f0ff]">
            <div className="p-3 bg-[#E5F4F7] rounded-md transition-all duration-300 group-hover:bg-[#BFE5EC]">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                className="text-[30px] text-[#15A4C1]"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Advanced Tooling</h3>
              <p>
                Our molds are crafted using high-quality tools and advanced
                techniques to ensure durability and efficiency.
              </p>
            </div>
          </div>

          <div className="flex justify-start items-center gap-5 p-5 rounded-xl transition-all duration-300 group border-[1px] border-[#0000001A] shadow-[0px_4px_4px_-4px] shadow-[#000000a6] hover:border-[#01D4FF] hover:shadow-[0px_5px_8px_-4px] hover:shadow-[#a7f0ff]">
            <div className="p-3 bg-[#E5F4F7] rounded-md transition-all duration-300 group-hover:bg-[#BFE5EC]">
              <Wrench size={30} className="text-[#15A4C1]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Maintenance & Support</h3>
              <p>
                Comprehensive support services including mold repair,
                maintenance, and performance optimization.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex gap-10 p-5 lg:py-10 lg:px-20">
        <div className="flex flex-col items-stretch bg-[#F4F5F8] lg:w-[50%] sm:flex-row">
          {/* Product Image */}
          <div className="w-full lg:w-[50%] p-2.5">
            <Image
              src="/prod1.png"
              alt="Die Cast Trim Die & Runner System"
              width={300}
              height={350}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product Content */}
          <div className="flex w-full flex-col items-start p-2.5 pb-8 lg:w-[50%]">
            <h4 className="mb-5 text-2xl font-bold pt-4 text-[#007EBB]">
              Die Cast Trim Die & Runner System
            </h4>

            <p className="mb-6 text-lg">
              A specialized industrial assembly showcasing the intricate gating
              and runner system required for precise molten metal distribution
              during the high-pressure injection process.
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
              src="/prod2.png"
              alt="Die Cast Trim Die & Runner System"
              width={300}
              height={350}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product Content */}
          <div className="flex w-full flex-col items-start p-2.5 pb-8 lg:w-[50%] ">
            <h4 className="mb-5 text-2xl pt-4 font-bold text-[#007EBB]">
              Aluminium vibrator motor mold
            </h4>

            <p className="mb-6 text-lg">
              A robust, lightweight aluminum alloy casting featuring complex internal geometries and structural ribbing, engineered for high-performance automotive or industrial applications.
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
    </>
  );
};

export default Aboutus;
