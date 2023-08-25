import React from "react";

const ServiceCard = (prop) => {
  return (
    <div className="py-4 px-2   relative md:p-6 border shadow-lg rounded-lg">
        <div className="w-full flex">
        <div className="flex justify-end">
      <svg
        className="  w-[30px]  right-4 top-4  md:right-6  md:top-6  mb-4 md:mb-9 lg:mb-[80px] cursor-pointer"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="18" cy="18" r="18" fill="#D9D9D9" className="flex justify-end" />
        <path
          d="M23.6995 13C23.6995 12.5582 23.3413 12.2 22.8995 12.2L15.6995 12.2C15.2577 12.2 14.8995 12.5582 14.8995 13C14.8995 13.4418 15.2577 13.8 15.6995 13.8L22.0995 13.8L22.0995 20.2C22.0995 20.6418 22.4577 21 22.8995 21C23.3413 21 23.6995 20.6418 23.6995 20.2L23.6995 13ZM13.5657 23.4652L23.4652 13.5657L22.3338 12.4343L12.4343 22.3338L13.5657 23.4652Z"
          fill="white"
        />
      </svg>
      </div>
      </div>
      <img src={prop.icon} alt="" className="hidden lg:flex  h-[40px] " />
      <h4 className="text-lg md:text-2xl textfont-semibold mb-2">
        {prop.head}
      </h4>
      <p className="mb-2 font-normal text-[#2E2E2E] text-[12px] md:text-lg text">
        {prop.description}
      </p>
    </div>
  );
};

export default ServiceCard;
