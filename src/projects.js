import React from "react";
import Navbar from "./component/navbar";
import Newsletter from "./component/newsletter";
import Footer from "./component/footer";
import { AiOutlineArrowRight } from "react-icons/ai";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="px-[16px] md:px-[30px] lg:px-[80px]  lg:pt-[60px]">
        <div className="py-[32px] lg:py-[80px]  border-b border-dotted">
          <div className="w-full  flex mb-4 ">
            <button className="px-[20px]   md:px-[28px] py-[8px] md:py-[14px] rounded-[40px] border mx-auto">
              Our products{" "}
            </button>
          </div>
          <div className="relative">
            <h2 className="text-[24px] md:text-[32px] lg:text-[70px] font-bold text-center   transition-all  text-transparent bg-clip-text bg-gradient-to-b to-white via-black from-[#111111]">
              Projects{" "}
            </h2>
            <p className="font-normal text-[#2E2E2E] text-base md:text-lg text-center">
              We are a technology service company. We are experts at website
              design, development, management, and IT consulting.
            </p>
          </div>
        </div>
        <div className="md:px-[40px] lg:px-[90px] py-[32px] md:py-[64px] lg:py-[80px]">
          <h2 className="text-[28px] md:text-[48px] lg:text-[72px] font-semibold mb-[16px] md:mb-[24px] ">
            Building Products, One Success Story at a Time.
          </h2>
          <p className="font-normal text-[#2E2E2E] text-base md:text-lg  mb-[24px]  md:mb-[60px] ">
            We provide product research, design, testing services. We engage
            latest trends, technology and skills to provide you with a market
            fit, usable product.
          </p>
          <div className="flex justify-between flex-wrap mb-[32px] lg:mb-[64px]">
            <div>
              <img src="/mailchimp.svg" alt="" />
            </div>
            <div>
              <img src="/paystack.svg" alt="" />
            </div>
            <div>
              <img src="/giz.svg" alt="" />
            </div>
            <div>
              <img src="/shopify.svg" alt="" />
            </div>
            <div>
              <img src="/aws.svg" alt="" />
            </div>
          </div>

          <p className="font-normal text-[#2E2E2E] text-base md:text-lg pb-[16px]  md:mb-[32px]  ">
            OUR PRODUCTS
          </p>
        </div>

        <div className="py-[32px] md:py-[48px] lg:py-[80px] md:mx-[40px] lg:mx-[90px] border-t border-b border-dotted grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[30px]">
          <div className="">
            <img src="/vant.png" alt="" />
            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-lg md:text-2xl lg:text-[32px] font-semibold mb-4">
                  Vant
                </h2>
                <AiOutlineArrowRight className="" />
              </div>
              <p className="font-normal text-[#2E2E2E] text-base md:text-lg">
                Vant App lets you create your own savings goals and track your
                progress. Do you want to save money for your future goals? Try
                Vant App, a free app that helps you plan and manage your ...
              </p>
            </div>
          </div>
          <div className="">
            <img src="/buyasap.png" alt="" />
            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-lg md:text-2xl lg:text-[32px] font-semibold mb-4">
                  BuyAsap
                </h2>
                <AiOutlineArrowRight className="" />
              </div>
              <p className="font-normal text-[#2E2E2E] text-base md:text-lg">
                BuyAsap Africa is an online shopping site, which enables
                shoppers to buy and pay in conventional payments for home
                appliances, computers, kiddies items, fashion items for men,
                women, ....
              </p>
            </div>
          </div>
          <div className="">
            <img src="/konix.png" alt="" />
            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-lg md:text-2xl lg:text-[32px] font-semibold mb-4">
                  Konix
                </h2>
                <AiOutlineArrowRight className="" />
              </div>
              <p className="font-normal text-[#2E2E2E] text-base md:text-lg">
                Konix helps you shop your favourite luxury brand in one place,
                pay in your local currency, and get it delivered to your
                doorstep. Shop Nike, adidas, H&M, YSL, Ralph Lauren and more on
                the Konix ...
              </p>
            </div>
          </div>
          <div className="">
            <img src="/bezi.png" alt="" />
            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-lg md:text-2xl lg:text-[32px] font-semibold mb-4">
                  Bezi
                </h2>
                <AiOutlineArrowRight className="" />
              </div>
              <p className="font-normal text-[#2E2E2E] text-base md:text-lg">
                Bezi is on a mission to impact the Africa ecosystem, empowering
                one entrepreneur at a time, helping them to achieve their goals,
                and to build businesses that contribute to the economic
                development of Afri...
              </p>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Projects;
