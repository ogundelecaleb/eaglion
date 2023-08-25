import React from "react";

const Form = () => {
  return (
    <div className="pt-[32px] md:pt-[72px]  lg:pt-[120px] md:px-[60px] lg:px-[100px]">
      <form>
        <div className="flex flex-col  mb-[32px] md:[70px] ">
          <label className="text-[22px] md:text-[28px] font-semibold">
            Name
          </label>
          <input
            placeholder="Your name"
            className="px-3 md:px-4 py-2 md:py-3 rounded-lg border"
          />
        </div>
        <div className="flex flex-col  mb-[32px] md:[70px] ">
          <label className="text-[22px] md:text-[32px] font-semibold">
            Email
          </label>
          <input
            placeholder="example@gmail.com"
            className="px-3 md:px-4 py-2 md:py-3 rounded-lg border"
          />
        </div>
        <div className="flex flex-col mb-[32px] md:[70px] ">
          <label className="text-[22px] md:text-[32px] font-semibold">
            How can we help?
          </label>
          <textarea
            placeholder="tell us about your project"
            className="px-3 md:px-4 py-2 md:py-3 rounded-lg border min-h-[300px] md:min-h-[500px]"
          />
        </div>
        <div>
          <h3 className="text-[22px] md:text-[32px] mb-5 font-semibold">
            Services
          </h3>
          <div className="flex flex-wrap gap-[32px] md:gap-[64px]">
            <div className="flex gap-3 items-center">
              <input type="checkbox" className="" />
              <label className="text-[16px] md:text-[18px] lg:text-[24px] ">
                Product design
              </label>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <label className="text-[16px] md:text-[18px] lg:text-[24px] ">
                e-commerce
              </label>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <label className="text-[16px] md:text-[18px] lg:text-[24px] ">
                Web design
              </label>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <label className="text-[16px] md:text-[18px] lg:text-[24px] ">
                Email marketing
              </label>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <label className="text-[16px] md:text-[18px] lg:text-[24px] ">
                Software development
              </label>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <label className="text-[16px] md:text-[18px] lg:text-[24px] ">
                Brand design & printing
              </label>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <label className="text-[16px] md:text-[18px] lg:text-[24px] ">
                Training & consulting
              </label>
            </div>
            <div className="flex gap-3 items-center ">
              <input type="checkbox" />
              <label className="text-[16px] md:text-[18px] lg:text-[24px] ">
                Others
              </label>
            </div>
          </div>
        </div>
        <button className="w-full text-center text-white py-3 rounded-lg bg-[#04234F] mt-8 ">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Form;
