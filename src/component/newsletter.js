import React from "react";
import { Link } from "react-router-dom";
import {PiNotepadThin} from "react-icons/pi"
import Mailchip from "./mailchip"

const Newsletter = () => {
  return (
    <div className="px-[16px] md:px-[30px] lg:px-[80px] my-[80px]">
      <div>
        <h2 className="lg:text-[60px] md:text-[40px] text-[24px] tracking-wide  mb-[25px] md:mb-[32px] lg:[40px] text-[#040C3C] text-center">
          Want a free project quote?
          <br />
          <span className="text-black">Get in touch with us</span>
        </h2>
      </div>

      <Link to="https://forms.gle/PjotJNonL1Sq7R5y8" target="_blank">
        <div className="h-[150px] shadow-lg  md:h-[204px] max-w-[150px] md:max-w-[204px] border border-gray-500 rounded-full mx-auto py-[30px] md:py-[50px] mb-[80px] md:mb-[120px] mt-[20px] md:mt-[40px] hover:bg-[#040C3C] hover:text-white">
          <p className=" text-center mb-[20px]">Get a free quote</p>

          <PiNotepadThin className="mx-auto text-4xl" />
        </div>
      </Link>

      <div className="bgImage relative bg-no-repeat bg-cover w-full  md:py-[48px] py-[32px] rounded-lg">
        <h2 className="text-white text-center text-[20px] md:text-[28px] lg:text[36px]">
          Subscribe to our newsletter <br /> for blog and technology insights
          updates
        </h2>

        {/* <div className="py-3 px-3 bg-white rounded-lg flex items-center max-w-[323px] md:max-w-[623px] mx-auto my-[50px] md:my-[70px] lg:my-[90px] gap-2 ">
          <input
            placeholder=""
            className="w-full focus:border-1 py-1 focus:outline-none focus:ring-[#124072] focus:border-[#124072]"
          />{" "}
          <button className="bg-[#040C3C] text-[14px] md:text-[16px] px-2 py-2 rounded-lg text-white">
            Subscribe
          </button>
        </div> */}

        <Mailchip />
      </div>
    </div>
  );
};

export default Newsletter;
