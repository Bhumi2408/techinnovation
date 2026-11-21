import {
  Check,
  CheckCircle,
  EyeIcon,
  Handshake,
  ListChecks,
  Shield,
} from "lucide-react";

const Quality = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-16 bg-radial-[at_50%_100%] from-[#E5F4F7] from-0% to-[#F6F3F1] to-100% py-10 px-5 lg:py-24 lg:px-24">
        <div className="lg:w-[48%] space-y-5">
          <h5 className="text-[#15A4C1] text-xl font-medium">
            Quality & Certifications
          </h5>
          <h6 className="font-semibold text-2xl lg:text-4xl">
            Precision You Can Trust, Quality You Can Rely On
          </h6>
          <p className="text-[17px]">
            Every die casting mold we manufacture undergoes strict quality
            checks, precision measurements, and performance testing before
            delivery. We follow industry-certified processes to ensure
            durability, accuracy, and consistent production results for every
            client.
          </p>
        </div>
        <div className="lg:w-[52%] space-y-5">
          <div className="flex items-center gap-5 bg-white rounded-lg p-3">
            <Shield size={20} className="text-[#5E9ACC]" />
            <p>ISO Certified Manufacturing</p>
          </div>
          <div className="flex items-center gap-5 bg-white rounded-lg p-3">
            <CheckCircle size={20} className="text-[#5E9ACC]" />
            <p>100% Inspection Process</p>
          </div>
          <div className="flex items-center gap-5 bg-white rounded-lg p-3">
            <EyeIcon size={20} className="text-[#5E9ACC]" />
            <p>Material Traceability</p>
          </div>
          <div className="flex items-center gap-5 bg-white rounded-lg p-3">
            <ListChecks size={20} className="text-[#5E9ACC]" />
            <p>Documentation & Reports</p>
          </div>
          <div className="flex items-center gap-5 bg-white rounded-lg p-3">
            <Handshake size={20} className="text-[#5E9ACC]" />
            <p>Long-Term Mold Support</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quality;
