import React from "react";
import Questions from "./Questions";

const Faq = () => {
  return (
    <div className="px-[16px] md:px-[30px] lg:px-[80px]  md:mx-[60px] lg:mx-[108px] mt-[40px]">
      <div className="flex flex-col md:flex-row md:gap-[10%] gap-5">
        <div className="md:w-[50%] w-full">
          {" "}
          <h2 className="lg:text-[60px] md:text-[40px] text-[24px] tracking-wide  mb-[25px] md:mb-[32px] lg:[40px]">
            Frequently asked Questions
          </h2>
        </div>

        <div className="md:w-[50%] w-full">
          <Questions question="who aer we ?" answer="Eaglion" />
          <Questions question="who aer we ?" answer="Eaglion" />
          <Questions question="who aer we ?" answer="Eaglion" />
          <Questions question="who aer we ?" answer="Eaglion" />
          <Questions question="who aer we ?" answer="Eaglion" />
          <Questions question="who aer we ?" answer="Eaglion" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
