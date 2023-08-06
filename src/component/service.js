import React from "react";

const Service = () => {
  return (
    <div className="px-[16px] md:px-[30px] lg:px-[80px] ">
      <h2 className="text-center lg:text-[70px] md:text-[40px] text-[24px] font-bold tracking-wider">How Can We Help You?</h2>{" "}
      <p className="text-[12px] md:text-[16px] text-center mb-[25px]">We offer diverse servicxes, a few are listed below.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
        <div className="text-center py-[30px] md:py-[40px] px-[14px] bg-[#654EA5] rounded-lg text-white">
          <h2 className="mb-[20px] text-[24px] lg:text-[30px] font-bold">
            Product Design
          </h2>

          <p className="text-[16px] lg:text-[18px] ">
            We provide product research, design, testing services. We engage
            latest trends, technology and skills to provide you with a market
            fit, usable product.
          </p>
          <img src="/cartoon.png" alt="cartoon" className="mx-auto mt-[40px]" />
        </div>

        <div className="text-center py-[30px] md:py-[40px] px-[14px] bg-[#00D085] rounded-lg text-white">
          <h2 className="mb-[20px] text-[24px] lg:text-[30px] font-bold">
            E-commerce
          </h2>

          <p className="text-[16px] lg:text-[18px] ">
            We provide industry standard eCommerce website development,
            operations, logistics and consultancy services.
          </p>
          <img src="/cartoon.png" alt="cartoon" className="mx-auto mt-[40px]" />
        </div>
        <div className="text-center py-[30px] md:py-[40px] px-[14px] bg-[#9867FF] rounded-lg text-white">
          <h2 className="mb-[20px] text-[24px] lg:text-[30px] font-bold">
            Software Development
          </h2>

          <p className="text-[16px] lg:text-[18px] ">
            {" "}
            We provide software development services. Our expert frontend,
            backend developers and team of product managers will help develop
            and bring your idea or product to life.
          </p>
          <img src="/cartoon.png" alt="cartoon" className="mx-auto mt-[40px]" />
        </div>
      </div>

      <div className="w-full  flex my-[30px]">
        <button className="px-[20px]   md:px-[28px] py-[8px] md:py-[14px] rounded-[40px] border mx-auto">View more services</button>
      </div>
    </div>
  );
};

export default Service;
