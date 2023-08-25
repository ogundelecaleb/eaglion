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
      <div className="px-[16px] md:px-[30px] lg:px-[80px] py-[32px] flex items-center justify-between ">
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
          <ul className=" text-[20px] text-[#000] font-semibold space-x-[21px] flex items-center">
            <li>Project</li>
            <li>Product</li>
            <li>Services</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
          <button className="px-[40px] bg-[#040c3c] py-[16px] rounded-[40px] flex items-center gap-[10px]">
            <p className="text-white">Request quote </p>

            <img src="/receipt.svg" className="" alt="receipt" />
          </button>
        </div>

        <button onClick={handleToggle} className="lg:hidden md:inline-block">
          {toggle ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </button>
      </div>
      {showMenu && (
         <m.div
         initial={{ y: -500, opacity: 0 }}
         animate={{
           y: 0,
           opacity: 1,
           scale: 1,
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

              <p className="text-white">Creating tomorrow’s solutions today</p>
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
            {/* <li className="cursor-pointer border-b hover:text-[##990019] hover:border-b-[#124072]">
              Event
            </li> */}
          </ul>
        </div>
        </m.div>)}
    </div>
  );
};

export default Navbar;
