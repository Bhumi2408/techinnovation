import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full text-white">
      {/* Main Footer */}
      <div className="bg-[#427FB2] px-5 py-12 sm:px-8 lg:px-[7.2%] lg:py-14">
        <div className="mx-auto grid max-w-[1625px] grid-cols-1 gap-10  lg:grid-cols-[1.15fr_1.2fr_1.15fr] lg:gap-0">
          {/* Contact Column */}
          <div className="lg:border-r lg:border-white/40 lg:pr-10">
            <h2 className="mb-10 text-3xl font-semibold">Contact</h2>

            <div className="space-y-10">
              <div className="flex items-center gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D9F0FF] text-[#00A9D6]">
                  <MapPin size={29}  />
                </span>
                <p className="text-lg leading-[1.8] sm:text-xl">
                  Tech innovation I-15,sec-4,bawana industrial area,delhi-110039
                </p>
              </div>

              <a href="tel:+919311172890" className="flex items-center gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D9F0FF] text-[#00A9D6]">
                  <Phone size={27} fill="currentColor" />
                </span>
                <p className="text-lg sm:text-xl">+91 93111 72890</p>
              </a>

              <a
                href="mailto:techinnovation2019@gmail.com"
                className="flex items-center gap-5"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D9F0FF] text-[#00A9D6]">
                  <Mail size={29} />
                </span>
                <p className="break-all text-lg sm:text-xl">
                  techinnovation2019@gmail.com
                </p>
              </a>
            </div>
          </div>

          {/* Center Logo & Description */}
          <div className="flex flex-col lg:items-center lg:text-center lg:border-r lg:border-white/40 lg:px-10">
            <Link href="/" aria-label="Tech Innovation home">
              <div className="relative mb-7 h-[120px] w-[140px] bg-white">
                <Image
                  src="/logo.png"
                  alt="Tech Innovation"
                  fill
                  sizes="183px"
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="max-w-[430px] font-semibold ">
              “We provide precision die casting solutions with a strong focus on
              quality, durability, and efficiency. Using advanced manufacturing
              processes, we deliver reliable components that meet diverse
              industrial needs while ensuring consistent performance and
              customer satisfaction.”
            </p>

            {/* Social Media Icons */}
            {/* <div className="mt-6 flex items-center gap-5">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#242424] transition hover:bg-black"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[20px] text-white"
                />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#34599B] transition hover:bg-[#284780]"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-[20px] text-white"
                />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="lg:pl-[28%]">
            <h2 className="mb-10 text-3xl font-semibold">Quick Links</h2>

            <ul className="list-disc space-y-7 pl-4 text-lg">
              <li>
                <Link href="/" className="hover:text-[#CDEFFF]">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="#aboutus" className="hover:text-[#CDEFFF]">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#CDEFFF]">
                  PRODUCTS
                </Link>
              </li>
              <li>
                <Link href="#contactus" className="hover:text-[#CDEFFF]">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#2698CB] px-4 py-4 text-center text-sm sm:text-base">
        Copyright © 2026 Tech Innovation All Right Reserved
        {" | "}Powered by{" "}
        <a
          href="https://www.cybertricksmedia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:underline"
        >
          Cybertricksmedia Pvt Ltd
        </a>
      </div>
    </footer>
  );
};

export default Footer;
