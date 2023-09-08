import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-3 pb-3 md:px-4 lg:px-6 md:pb-4 ">
      <div className=" bg-[#040C3C] px-[24px] md:px-[40px] lg:px-[64px]  py-[24px] md:pt-[40px] lg:pt-[64px]  md:pb-[30px] lg:pb-[36px] rounded-lg">
        <div className="text-white flex flex-col md:flex-row mb-[80px] md:mb-[100px] gap-[50px]">
          <div className="w-full md:w-[30%] lg:w-[40%]">
            <img
              src="/eaglionLogowhite.png"
              alt="eaglion logo"
              className="object-contain h-[30px] md:h-[35px] lg:h-[39px]"
            />{" "}
            <p>Creating tomorrow’s solutions today</p>
          </div>
          <div className="w-full flex gap-9 md:gap-[10%] md:w-[60%] ">
            <div>
              <h3 className="pb-3 font-semibold">Company</h3>
              <ul className=" ">
                <Link to="/home">
                  <li className="cursor-pointer">Home </li>
                </Link>
                <Link to="/product">
                  {" "}
                  <li className="cursor-pointer">Products</li>
                </Link>
                <Link to="/project">
                  {" "}
                  <li className="cursor-pointer">Projects</li>
                </Link>
                <Link to="/service">
                  {" "}
                  <li className="cursor-pointer">Services</li>
                </Link>
                <Link to="/contact">
                  {" "}
                  <li className="cursor-pointer">Contact</li>
                </Link>
                <Link to="/about">
                  {" "}
                  <li className="cursor-pointer">About Us</li>
                </Link>
              </ul>
            </div>
            <div>
              <h3 className="pb-3 font-semibold">Resources</h3>
              <ul className="space-y-3">
                <Link to="https://forms.gle/PjotJNonL1Sq7R5y8" target="_blank">
                  <li className="cursor-pointer">Request Qoute</li>{" "}
                </Link>
                <Link to="">
                  {" "}
                  <li className="cursor-pointer">Hire a Talent</li>{" "}
                </Link>
                <Link to="">
                  {" "}
                  <li className="cursor-pointer">Blog</li>
                </Link>
                <Link to="/#faq">
                  {" "}
                  <li className="cursor-pointer">FAQS</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-white w-full my-3 "></div>
        <div className="flex items-center flex-col md:flex-row gap-3 justify-between text-white">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Eaglion Global Technologies LLC. All
            Rights Reserved
          </p>
          <div className="flex space-x-3">
            <AiFillTwitterCircle />
            <Link className="cursor-pointer" to="https://www.linkedin.com/company/eaglion-global-technologies/ " target="_blank">
              <AiFillLinkedin />
            </Link>{" "}
            <Link className="cursor-pointer" to="https://instagram.com/eaglion_chub?igshid=ZGUzMzM3NWJiOQ== " target="_blank">
              <AiFillInstagram />
            </Link>
            <AiFillYoutube />
            <AiFillFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
