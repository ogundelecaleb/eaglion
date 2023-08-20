import React from "react";

const Empower = () => {
  return (
    <div>
      {" "}
      <div className="px-[16px] md:px-[30px] lg:px-[80px] mx-[30px] md:mx-[60px] lg:mx-[108px]">
        <h2 className="font-bold text-[24px] md:text-[40px] lg:text-[70px] text-center">
          Empower Your <span className="text-[#04234F]">Brand</span> with{" "}
          <span className="text-[#04234F]"> Innovative </span>Software, Mobile
          and Web Solutions.{" "}
        </h2>

        <div className="flex justify-end mt-[60px]">
          <div className="flex gap-[10px] w-full md:w-[70%] lg:w-[50%] mt-[40px] ">
            <img src="/lightbulb.png" alt="bulb" className="h-[40px]" />
            <div>
              <p>
                At Eaglion Global Technologies, we believe in the transformative
                power of technology. Our passion lies in empowering businesses
                to reach their full digital potential through innovative
                software, mobile, and web solutions.
              </p>
              <button className=" px-[30px] text-[14px] md:text-[16px]  md:px-[40px] bg-[#040c3c] py-[16px] rounded-[40px] mt-[20px] md:gap-[10px] text-white mx-auto">
                More about us
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="px-[16px] md:px-[30px] lg:px-[80px] my-[80px]" >
      <div className="flex flex-col md:flex-row gap-[30px] ">
        <div className="w-full md:w-[50%]">
          <h2 className="text-[24px] md:text-[32px]    lg:text-[64px] font-bold">
            We have the expertise to make your vision a reality.
          </h2>
        </div>
        <div className="md:pt-[60px] lg:pt-[96px]  relative w-full md:w-[50%] flex flex-col md:justify-end">
          <img src="/hallow rectangle.png" alt="" className=" w-[463px] z-10 " />
        </div>
      </div></div>
    </div>
  );
};

export default Empower;
