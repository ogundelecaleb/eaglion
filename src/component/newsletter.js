import React from "react";

const Newsletter = () => {
  return (
    <div className="px-[16px] md:px-[30px] lg:px-[80px] my-[80px]" >

      <div>
      <h2 className="lg:text-[60px] md:text-[40px] text-[24px] tracking-wide  mb-[25px] md:mb-[32px] lg:[40px] text-[#040C3C] text-center">
          Want a free project quote?
          <br /><span className="text-black">Get in touch with us</span> 
        </h2>
      </div>

      <div className="h-[150px] md:h-[204px] max-w-[150px] md:max-w-[204px] border border-gray-500 rounded-full mx-auto py-[30px] md:py-[50px] mb-[80px] md:mb-[120px] mt-[20px] md:mt-[40px]">
        <p className=" text-center mb-[20px]">Get a free quote</p>

        <svg
        className="mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M13.46 39.4C15.1 37.64 17.6 37.78 19.04 39.7L21.06 42.4C22.68 44.54 25.3 44.54 26.92 42.4L28.94 39.7C30.38 37.78 32.88 37.64 34.52 39.4C38.08 43.2 40.98 41.94 40.98 36.62V14.08C41 6.02 39.12 4 31.56 4H16.44C8.88 4 7 6.02 7 14.08V36.6C7 41.94 9.92 43.18 13.46 39.4Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 14H32"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 22H30"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div className="bgImage relative bg-no-repeat bg-cover w-full  md:py-[48px] py-[32px] rounded-lg">
        <h2 className="text-white text-center text-[20px] md:text-[28px] lg:text[36px]">
          Subscribe to our newsletter <br /> for blog and technology insights
          updates
        </h2>

        <div className="py-3 px-3 bg-white rounded-lg flex items-center max-w-[323px] md:max-w-[623px] mx-auto my-[50px] md:my-[70px] lg:my-[90px] gap-2 "><input className="w-full "/> <button className="bg-[#040C3C] text-[14px] md:text-[16px] px-2 py-2 rounded-lg text-white">Subscribe</button></div>
      </div>
    </div>
  );
};

export default Newsletter;
