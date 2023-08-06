import React from "react";

const Navbar = () => {
  return (
    <div className="px-[16px] md:px-[30px] lg:px-[80px] py-[32px] flex items-center justify-between ">
      <div>
        <img src="/eaglionlogo.png" alt="eaglion logo" className="object-contain h-[30px] md:h-[35px] lg:h-[39px]" />
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

            <img src="/receipt.svg" className="" alt="receipt"/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
