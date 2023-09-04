import React from "react";
import { Link } from "react-router-dom";

const Customer = () => {
  return (
    <div className="px-[16px] md:px-[30px] lg:px-[80px] mb-[42px] md:mb-[70px]  ">
      <div>
        <h2 className="font-bold text-[24px] md:text-[40px] lg:text-[70px] text-center">
          Who Have We Worked With?
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[24px] text-center">
          We have worked with several brands and here are those we’ve onboarded.
        </p>
      </div>

      <div className="mt-[60px] md:mt-[90px] lg:mt-[40px] py-[60px] md:py-[90px] lg:py-[130px] bg-[#FAFAFA] rounded-2xl">
        <div className="md:mx-[60px] px-4  lg:mx-[11px] ">
          <div className="flex justify-center font-semibold gap-2 md:gap-4 mb-[24px] lg:text-[20px]">
            {" "}
            <button className="md:bg-[#040C3C]  md:px-[24px] md:py-[16px] flex items-center gap-1 md:gap-2 rounded-[24px] md:border-4 border-white">
              <div className="h-2 w-2 bg-black md:bg-white rounded-full  md:inline-block"></div>{" "}
              <p className="md:text-white text-black text-[18px] lg:text-[20px]">
                Vant App
              </p>
            </button>{" "}
            <button className="md:bg-[#040C3C]  md:px-[24px] md:py-[16px] flex items-center gap-1 md:gap-2 rounded-[24px] md:border-4 border-white">
              <div className="h-2 w-2 bg-black md:bg-white rounded-full  md:inline-block"></div>{" "}
              <p className="md:text-white text-black text-[18px] lg:text-[20px]">
                Buy Asap
              </p>
            </button>
            <button className="md:bg-[#040C3C]  md:px-[24px] md:py-[16px] flex items-center gap-1 md:gap-2 rounded-[24px] md:border-4 border-white">
              <div className="h-2 w-2 bg-black md:bg-white rounded-full  md:inline-block"></div>{" "}
              <p className="md:text-white text-black text-[18px] lg:text-[20px]">
                Konix
              </p>
            </button>
            <button className="md:bg-[#040C3C] font-semibold md:px-[24px] md:py-[16px] flex items-center gap-1 md:gap-2 rounded-[24px] md:border-4 border-white">
              <div className="h-2 w-2 bg-black md:bg-white rounded-full  md:inline-block"></div>{" "}
              <p className="md:text-white text-black text-[18px] lg:text-[20px]">
                Bezi
              </p>
            </button>
          </div>
          <div className="flex flex-wrap  font-semibold md:flex-nowrap justify-center gap-4  mb-2 md:pl-[7%] w-full">
            <button className="md:bg-black  md:px-[24px] md:py-[16px] flex items-center gap-1 md:gap-2 rounded-[24px] md:border-4 border-white">
              {" "}
              <div className="h-2 w-2 bg-black md:bg-white rounded-full  md:inline-block"></div>{" "}
              <p className="md:text-white text-black text-[18px] lg:text-[20px]">
                SolutionsUIUX
              </p>
            </button>{" "}
            <button className="md:bg-black  md:px-[24px] md:py-[16px] flex items-center gap-1 md:gap-2 rounded-[24px] md:border-4 border-white">
              <div className="h-2 w-2 bg-black md:bg-white rounded-full  md:inline-block"></div>{" "}
              <p className="md:text-white text-black text-[18px] lg:text-[20px]">
                GIZ
              </p>
            </button>{" "}
            <button className="md:bg-black  md:px-[24px] md:py-[16px] flex items-center gap-1 md:gap-2 rounded-[24px] md:border-4 border-white">
              <div className="h-2 w-2 bg-black md:bg-white rounded-full  md:inline-block"></div>{" "}
              <p className="md:text-white text-black text-[18px] lg:text-[20px]">
                Samuel Otigba
              </p>
            </button>{" "}
            <button className="md:bg-black  md:px-[24px] md:py-[16px] flex items-center gap-1 md:gap-2 rounded-[24px] md:border-4 border-white">
              <div className="h-2 w-2 bg-black md:bg-white rounded-full  md:inline-block"></div>{" "}
              <p className="md:text-white text-black text-[18px] lg:text-[20px]">
                Essenza
              </p>
            </button>{" "}
            <button className="md:bg-black  md:px-[24px] md:py-[16px] flex items-center gap-1 md:gap-2 rounded-[24px] md:border-4 border-white">
              <div className="h-2 w-2 bg-black md:bg-white rounded-full  md:inline-block"></div>{" "}
              <p className="md:text-white text-black text-[18px] lg:text-[20px]">
                Verbal Bridges
              </p>
            </button>{" "}
          </div>
          <div className="flex flex-wrap font-semibold md:flex-nowrap justify-center gap-4 pl-[7%]  md:pl-[7%] w-full">
            {" "}
            <button className="md:bg-black  md:px-[24px] md:py-[16px] flex items-center gap-1 md:gap-2 rounded-[24px] md:border-4 border-white">
              <div className="h-2 w-2 bg-black md:bg-white rounded-full  md:inline-block"></div>{" "}
              <p className="md:text-white text-black text-[18px] lg:text-[20px]">
                VendorAgro
              </p>
            </button>{" "}
            <button className="md:bg-black  md:px-[24px] md:py-[16px] flex items-center gap-1 md:gap-2 rounded-[24px] md:border-4 border-white">
              <div className="h-2 w-2 bg-black md:bg-white rounded-full  md:inline-block"></div>{" "}
              <p className="md:text-white text-black text-[18px] lg:text-[20px]">
                Rumble n tumble
              </p>
            </button>{" "}
            <button className="md:bg-black  md:px-[24px] md:py-[16px] flex items-center gap-1 md:gap-2 rounded-[24px] md:border-4 border-white">
              <div className="h-2 w-2 bg-black md:bg-white rounded-full  md:inline-block"></div>{" "}
              <p className="md:text-white text-black text-[18px] lg:text-[20px]">
                Bedmate Furnitures
              </p>
            </button>{" "}
            <button className="md:bg-black  md:px-[24px] md:py-[16px] flex items-center gap-1 md:gap-2 rounded-[24px] md:border-4 border-white">
              <div className="h-2 w-2 bg-black md:bg-white rounded-full  md:inline-block"></div>{" "}
              <p className="md:text-white text-black text-[18px] lg:text-[20px]">
                Axtre Construction
              </p>
            </button>{" "}
          </div>
        </div>
      </div>

      <section>
        <h2 className="lg:text-[64px] md:text-[40px] text-[24px] tracking-wide font-bold mb-[25px] md:mb-[32px] lg:[40px]">
          Featured Clients
        </h2>
        <div className="grid md:grid-cols-2  grid-cols-1 gap-[60px] md:gap-[100px]">
          <div>
            <h3 className="lg:text-[40px] md:text-[30px] text-[19px] font-bold">
              Vant
            </h3>
            <p className="lg:text-[18px] md:text-[18px] text-[16px] mb-[32px]">
              Vant App lets you create your own savings goals and track your
              progress. Do you want to save money for your future goals? Try
              Vant App, a free app that helps you plan and manage your savings
              with ease. Vant app lets you create your own goals and track your
              progrss every time you save money.
            </p>
            <Link to="/vant">
              <button className="px-3 py-2 bg-black text-white rounded-[24px]">
                VIEW CASE STUDY
              </button>
            </Link>
          </div>
          <div>
            {" "}
            <h3 className="lg:text-[40px] md:text-[30px] text-[19px] font-bold">
              BuyAsap
            </h3>
            <p className="lg:text-[18px] md:text-[18px] text-[16px] mb-[32px]">
              BuyAsap Africa is an online shopping site, which enables shoppers
              to buy and pay in conventional payments for home appliances,
              computers, kiddies items, fashion items for men, women, and
              children; gadgets, electronics, groceries, and a whole lot more
              from premium brands.
            </p>
            <button className="px-3 py-2 bg-black text-white rounded-[24px]">
              VIEW CASE STUDY
            </button>
          </div>
          <div>
            {" "}
            <h3 className="lg:text-[40px] md:text-[30px] text-[19px] font-bold">
              Konix
            </h3>
            <p className="lg:text-[18px] md:text-[18px] text-[16px] mb-[32px]">
              Konix helps you shop your favourite luxury brand in one place, pay
              in your local currency, and get it delivered to your doorstep.
              Shop Nike, adidas, H&M, YSL, Ralph Lauren and more on the Konix
              app, right on your phone in the comfort of your home.
            </p>
            <button className="px-3 py-2 bg-black text-white rounded-[24px]">
              VIEW CASE STUDY
            </button>
          </div>
          <div>
            <h3 className="lg:text-[40px] md:text-[30px] text-[19px] font-bold">
              Bezi
            </h3>
            <p className="lg:text-[18px] md:text-[18px] text-[16px] mb-[32px]">
              Bezi is on a mission to impact the Africa ecosystem, empowering
              one entrepreneur at a time, helping them to achieve their goals,
              and to build businesses that contribute to the economic
              development of Africa. Access is everything! imagine where this
              world is the reality of Africa.
            </p>
            <button className="px-3 py-2 bg-black text-white rounded-[24px]">
              VIEW CASE STUDY
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customer;
