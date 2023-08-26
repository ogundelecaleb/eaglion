import React from "react";
import Questions from "./Questions";

const WhyChooseFaq = () => {
  return (
    <div className="px-[16px] md:px-[30px] lg:px-[80px]  mt-[40px]">
      <div className="flex flex-col md:flex-row md:gap-[10%] gap-5">
        <div className="md:w-[50%] w-full">
          {" "}
          <h2 className="lg:text-[60px] md:text-[40px] text-[24px] tracking-wide  mb-[25px] md:mb-[32px] lg:[40px]">
          Why Choose Us?          </h2>
        </div>

        <div className="md:w-[50%] w-full">
          <Questions question="Best Quality Designs" answer="Eaglion" />
          <Questions question="24/7 Live Support" answer="Eaglion" />
          <Questions question="Result Oriented Projects" answer="Eaglion" />
          <Questions question="Best ROI Techniques" answer="Eaglion" />
          <Questions question="Experienced Professionals" answer="Eaglion" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseFaq;
