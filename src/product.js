import React from "react";
import Navbar from "./component/navbar";
import Newsletter from "./component/newsletter";
import Footer from "./component/footer";
import { Link } from "react-router-dom";
import { WiDirectionUpRight } from "react-icons/wi";

const Products = () => {
  return (
    <div>
      <Navbar />
      <div className="px-[16px] md:px-[30px] lg:px-[80px]  lg:pt-[60px]">
        <div className="py-[32px] lg:py-[80px]  border-b border-dotted">
          <div className="w-full  flex mb-4 ">
            <button className="px-[20px] hover:bg-[#040c3c] hover:text-white  md:px-[28px] py-[8px] md:py-[14px] rounded-[40px] border mx-auto">
              Our products{" "}
            </button>
          </div>
          <div className="relative">
            <h2 className="text-[24px] md:text-[32px] lg:text-[70px] font-bold text-center   transition-all  text-transparent bg-clip-text bg-gradient-to-b to-white via-black from-[#111111]">
              Products{" "}
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

        <div className="py-[32px] md:py-[48px] lg:py-[80px] md:mx-[40px] lg:mx-[90px] border-t border-b border-dotted">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6 md:mb-10">
            <img src="/eaglionHost.jpg" alt="" className="w-full md:w-[50%]" />
            <div className="w-full md:w-[50%]">
              <h2 className="text-lg md:text-2xl lg:text-[32px] font-semibold mb-4">
                Eaglion Host
              </h2>
              <p className="font-normal text-[#2E2E2E] text-base md:text-lg mb-3 md:mb-8">
                Ultrafast WordPressHosting Only $2. Don't wait any longer, join
                satisfied website owners and discover its benefits. Start a new
                site or upgrade your current setup with this outstanding
                platform and succeed online.
              </p>
              <Link to="https://eaglion.host/" target="_blank"   rel="noopener noreferrer">
                <button className="px-2 py-2 border bg-slate-200 flex items rounded-lg hover:bg-slate-100">
                  <p>checkout</p>
                  <WiDirectionUpRight />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6 md:mb-10">
            <img src="/eaglionsms.png" alt="" className="w-full md:w-[50%]" />
            <div className="w-full md:w-[50%]">
              <h2 className="text-lg md:text-2xl lg:text-[32px] font-semibold mb-4">
                Eaglion SMS
              </h2>
              <p className="font-normal text-[#2E2E2E] text-base md:text-lg mb-3 md:mb-8">
                Ultrafast WordPressHosting Only $2. Don't wait any longer, join
                satisfied website owners and discover its benefits. Start a new
                site or upgrade your current setup with this outstanding
                platform and succeed online.
              </p>

              <Link to="">
                <button className="px-2 py-2 border bg-slate-200 flex items-center rounded-lg hover:bg-slate-100">
                  <p>checkout</p>
                  <WiDirectionUpRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Products;
