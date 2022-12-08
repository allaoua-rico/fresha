import React, { useState } from "react";
import H5Wrapper from "../assets/Wrappers/H5Wrapper";
import LiWrapper from "../assets/Wrappers/LiWrapper";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import HorGrayLine from "./HorGrayLine";
import LanguageDialog from "./LanguageDialog";
import { FiGlobe } from "react-icons/fi";

export default function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="pt-10">
      <div className="lg:flex lg:flex-row-reverse lg:justify-end">
        <div className="grow grid grid-cols-2 md:grid-cols-4 gap-y-8	lg:gap-x-12">
          <div>
            <H5Wrapper>About Fresha</H5Wrapper>
            <ul className="">
              <LiWrapper>
                <a href="carrers">Carrers at Fresha</a>
              </LiWrapper>
              <LiWrapper>
                <a href="contact-us">Customer support</a>
              </LiWrapper>
              <LiWrapper>
                <a href="blog">Blog</a>
              </LiWrapper>
            </ul>
          </div>
          <div>
            <H5Wrapper>For business</H5Wrapper>
            <ul className="">
              <LiWrapper>
                <a href="/">For partners</a>
              </LiWrapper>
              <LiWrapper>
                <a href="/">Pricing</a>
              </LiWrapper>
              <LiWrapper>
                <a href="/">Support for partners</a>
              </LiWrapper>
            </ul>
          </div>
          <div>
            <H5Wrapper>Legal</H5Wrapper>
            <ul className="">
              <LiWrapper>
                <a href="/">Privacy Policy</a>
              </LiWrapper>
              <LiWrapper>
                <a href="/">Terms of Service</a>
              </LiWrapper>
              <LiWrapper>
                <a href="/">Terms of Use</a>
              </LiWrapper>
            </ul>
          </div>
          <div>
            <H5Wrapper>Free mobile app</H5Wrapper>
            <button className="w-full flex justify-center items-center text-white hover:opacity-75 transition-all duration-300 bg-[#101928] py-3 px-4 text-lg rounded-md font-semibold">
              <HiDownload className="hidden md:inline mx-2" />{" "}
              <div>Download app</div>
            </button>
          </div>
        </div>
        <div className="grow">
          <div className="text-3xl hidden lg:flex justify-center">Fresha</div>
          <div className="flex justify-center mt-12 lg:mr-5">
            <a href="/facebook">
              <FaFacebookF className="transition-all duration-300 mx-3 fill-gray-300 hover:fill-black w-6  h-6 " />
            </a>
            <a href="/facebook">
              <FaTwitter className="transition-all duration-300 mx-3 fill-gray-300 hover:fill-black w-6  h-6 " />
            </a>
            <a href="/facebook">
              <FaLinkedin className="transition-all duration-300 mx-3 fill-gray-300 hover:fill-black w-6  h-6 " />
            </a>
            <a href="/facebook">
              <FaInstagram className="transition-all duration-300 mx-3 fill-gray-300 hover:fill-black w-6  h-6 " />
            </a>
          </div>
        </div>
      </div>
      <HorGrayLine />
      <div className="text-secondarytextColor flex flex-col items-center md:flex-row justify-between">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center mb-3"
        >
          <FiGlobe className="mr-3 " />
          <div>English</div>
        </button>
        <div>© 2022 Fresha.com SV Ltd</div>
      </div>
      <LanguageDialog outOpen={open} outHandleClose={() => setOpen(false)} />
    </div>
  );
}
