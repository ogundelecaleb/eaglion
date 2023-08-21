import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="px-3 pb-3 md:px-4 lg:px-6 md:pb-4 ">
      <div className=" bg-[#040C3C] px-[24px] md:px-[40px] lg:px-[64px]  py-[24px] md:pt-[40px] lg:pt-[64px]  md:pb-[30px] lg:pb-[36px] rounded-lg">
        <div className="text-white flex mb-4 md:mb-6">
          <div className="w-full md:w-[30%] lg:w-[40%]">
            <img src="/eaglionLogowhite.png" alt=""/>
            <p>Creating tomorrow’s solutions today</p>
          </div>
          <div className="w-full flex gap-4 md:gap-[10%] md:w-[60%] ">
            <div>
              <h3 className="pb-3">Company</h3>
              <ul className="space-y-3">
                <li>Home </li>
                <li>Products</li>
                <li>Services</li>
                <li>Contact</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <h3 className="pb-3">Resources</h3>
              <ul className="space-y-3">
                <li>Projects</li>
                <li>Request Qoute</li>
                <li>Blog</li>
                <li>FAQS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-white w-full my-3 "></div>
        <div className="flex items-center flex-col md:flex-row gap-3 justify-between text-white">
          <p className="text-center md:text-left">
            {" "}
            © {new Date().getFullYear()} Eaglion Global Technologies Ltd. All
            Rights Reserved
          </p>{" "}
          <div className="flex space-x-3">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
            <AiFillFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
