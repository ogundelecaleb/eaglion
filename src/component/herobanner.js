import React from "react";
import { Link } from "react-router-dom";

const Herobanner = () => {
  return (
    <div className="px-[16px] md:px-[30px] lg:px-[80px]  pt-[100px]">
      {" "}
      <div className="w-full  flex ">
        <button className="px-[20px] hover:bg-[#040c3c] hover:text-white   md:px-[28px] py-[8px] md:py-[14px] rounded-[40px] border mx-auto hover:-translate-y-2 transition ease-in-out duration-150">
          Transforming ideas into reality
        </button>
      </div>
      <div>
        <h2 className="text-[24px] md:text-[32px] lg:text-[70px] font-bold text-center   transition-all  text-transparent bg-clip-text bg-gradient-to-b to-white via-black from-[#111111]">
          Crafting Cutting-Edge Software,
        </h2>
        <h2 className="text-[24px] md:text-[32px] lg:text-[70px] font-bold text-center text-transparent  bg-clip-text bg-gradient-to-b to-white via-black from-[#111111]">
          {" "}
          Mobile and Web Solutions.
        </h2>
      </div>
      <h4 className="text-[16px] md:text-[18px] text-center font-bold mt-[24px] mb-[40px]">
        We are a technology service company. We are experts at website design,
        development, management, and IT consulting.
      </h4>
      <div>
        <Link to="https://calendly.com/akoladepaul/get-quote" target="_blank">
          <button className=" px-[30px] text-[14px] md:text-[16px]  md:px-[40px] bg-[#040c3c] hover:bg-[#040c3cd8] py-[16px] rounded-[40px] flex items-center gap-[7px] md:gap-[10px] text-white mx-auto">
            <p>Book a 30-min call</p>
            <img src="/call.svg" className="" alt="cell-phone" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Herobanner;
