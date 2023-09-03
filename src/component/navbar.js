import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion as m } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      <div className="px-[16px] md:px-[30px] lg:px-[80px] py-[24px] flex items-center justify-between ">
        <div>
          <Link to="/">
            <img
              src="/eaglionlogo.png"
              alt="eaglion logo"
              className="object-contain h-[30px] md:h-[35px] lg:h-[39px]"
            />
          </Link>
        </div>

        <div className="md:flex items-center gap-[32px] hidden">
          <ul className=" text-[20px] text-[#000] font-semibold md:space-x-[12px] lg:space-x-[17px]  flex items-center">
            <Link to="/project">
              <li className="hover:text-white rounded-lg hover:bg-[#040C3C] px-3 py-2">
                Project
              </li>
            </Link>
            <Link to="/product">
              <li className="hover:text-white rounded-lg hover:bg-[#040C3C] px-3 py-2">
                Product
              </li>
            </Link>
            <Link to="/service">
              <li className="hover:text-white rounded-lg rounded-lg hover:bg-[#040C3C] px-3 py-2">
                Services
              </li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-white rounded-lg hover:bg-[#040C3C] px-3 py-2">
                Contact
              </li>
            </Link>
            <Link to="/about">
              <li className="hover:text-white rounded-lg hover:bg-[#040C3C] px-3 py-2">
                About Us
              </li>
            </Link>
          </ul>
          <Link to="https://forms.gle/PjotJNonL1Sq7R5y8" target="_blank" >
          <button className="md:px-[20px] lg:px-[20px] min-w-[180px] bg-[#040c3c] py-[16px] rounded-[40px] flex items-center gap-[10px] md:hidden lg:flex">
            <p className="text-white">Request quote </p>

            <img src="/receipt.svg" className="" alt="receipt" />
          </button></Link>
        </div>

        <button onClick={handleToggle} className="md:hidden md:inline-block">
          {toggle ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </button>
      </div>
      {showMenu && (
        <m.div
          initial={{ y: -500, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            // scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className=" mt-4 flex items-center space-x-3"
        >
          <div className="bg-[#040C3C] h-screen absolute top-0  lg:hidden w-full py-[40px] px-[20px] z-10">
            <div className="flex justify-between mb-[90px]">
              <div>
                <img src="/eaglionLogowhite.png" alt="" />

                <p className="text-white">
                  Creating tomorrow’s solutions today
                </p>
              </div>
              <button
                onClick={handleToggle}
                className="lg:hidden md:inline-block text-white text-xl"
              >
                {toggle ? <GiHamburgerMenu /> : <AiOutlineClose />}
              </button>
            </div>

            <ul className="flex flex-col space-y-9 mt-[40px] mb-2 text-white text-4xl ">
              <Link to="/">
                <li className="cursor-pointer   hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                  Home
                </li>
              </Link>
              <Link to="/product">
                <li className="cursor-pointer   hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                  Products
                </li>
              </Link>
              <Link to="/project">
                <li className="cursor-pointer   hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                  Projects
                </li>
              </Link>
              <Link to="/service">
                <li className="cursor-pointer   hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                  Services
                </li>
              </Link>
              <Link to="/contact">
                <li className="cursor-pointer   hover:text-[#1b599b] hover:border-b hover:border-b-lg hover:border-b-[#124072]">
                  Contact
                </li>
              </Link>
              <Link to="/about">
                <li className="cursor-pointer hover:border-b hover:text-[##990019] hover:border-b-[#124072]">
                  About Us
                </li>
              </Link>
            </ul>
          </div>
        </m.div>
      )}
    </div>
  );
};

export default Navbar;
