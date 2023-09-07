import React, {useRef} from "react";
import Navbar from "./component/navbar";
import WhyChooseFaq from "./component/whyChooseFaq";
import { AiOutlineArrowDown} from "react-icons/ai";
import Newsletter from "./component/newsletter";
import Footer from "./component/footer";

const AboutUs = () => {
  const bottomEl = useRef();
  const scrollingBottom = (event) => {
    const elmnt = bottomEl;
    elmnt.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  };
  return (
    <div>
      <Navbar />
      <div className="px-[16px] md:px-[30px] lg:px-[80px]  lg:pt-[60px]">
        <div className="py-[32px] lg:py-[80px]  border-b border-dotted">
          <div className="w-full  flex mb-4 ">
            <button className="px-[20px]  hover:bg-[#040c3c] hover:text-white   md:px-[28px] py-[8px] md:py-[14px] rounded-[40px] border mx-auto">
              Transforming ideas into reality
            </button>
          </div>
          <div className="relative">
            <h2 className="text-[24px] md:text-[32px] lg:text-[70px] font-bold text-center   transition-all  text-transparent bg-clip-text bg-gradient-to-b to-white via-black from-[#111111]">
              About Us{" "}
            </h2>
            <p className="font-normal text-[#2E2E2E] text-base md:text-lg text-center">
              We are a passionate team of creatives and professionals, grinding
              daily to serve your the best of digital, technology and business
              services.
            </p>
          </div>
        </div>
        <div className="py-[32px] lg:py-[80px]">
          <h2 className="text-[24px] md:text-[32px] lg:text-[50px] font-semibold ">
            We are Eaglion. The very core of our ideals is continuous
            improvements. We like the eagle are tenacious, ever innovating. And
            like the Lion we make our mark, displaying expressive creativity. We
            keep rasing the bar.
          </h2>

          <div onClick={scrollingBottom} className="mt-[40px] mb-[32px] md:mb-[48px] md:mt-[56px] lg:mt-[86px] cursor-pointer lg:mb-[56px] flex gap-2 items-center">
            <p>Learn more about our company</p>{" "}
            <AiOutlineArrowDown className="animate-bounce transition delay-500 duration-300 ease " />
          </div>
        </div>
        <img src="./work-settings.png" alt="work station" loading="lazy" />

        <section   ref={bottomEl} className="pb-[16px] md:pb-[36px] lg:pb-[60px]">
          <h2 className="text-[28px] md:text-[48px] lg:text-[80px] font-semibold mb-[16px] md:mb-[26px] lg:mb-[40px]">
            Our Mission
          </h2>
          <div className="flex flex-col md:flex-row md:justify-end">
            <h3 className="text-lg md:text-[28px] lg:text-[40px] w-full md:w-[60%] lg:w-[50%] leading-[25px] lg:leading-[52px]">
              We aim to help SMEs with quality and professionals services to
              ensure productivity and brand equity. We pursue to impact 1
              Million SMEs through our services, podcasts, blogs and trainings.
            </h3>
          </div>
        </section>
        <section id="6dProcess" className="pt-[16px] md:pt-[36px] lg:pt-[60px]">
          <h2 className="text-[22px] md:text-[36px] lg:text-[64px] font-semibold md:text-center mb-16px md:mb-[48px] ">
            Our 6-D Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
            {" "}
            <div className="bg-[#F5F5F5] p-[20px] md:p-0 md:bg-white">
              <h1 className="text-[48px] md:text-[72px] lg:text-[120px] font-bold mb-[24px] md:mb-[32px] lg:mb-[40px]">
                01.
              </h1>
              <h3 className="text-[18px] md:text-[24px] lg:text-[32px] font-semibold mb-2 md:mb-4">
                Discover
              </h3>
              <p className="text-[12px] md:text-base">
                We employ gap analysis study and research methods to understand
                the user challenges.
              </p>
            </div>
            <div className="bg-[#F5F5F5] p-[20px] md:p-0 md:bg-white">
              <h1 className="text-[48px] md:text-[72px] lg:text-[120px] font-bold mb-[24px] md:mb-[32px] lg:mb-[40px]">
                02.
              </h1>
              <h3 className="text-[18px] md:text-[24px] lg:text-[32px] font-semibold mb-2 md:mb-4">
                Define
              </h3>
              <p className="text-[12px] md:text-base">
                We ideate, segment and define problems, frustrations and
                challenges that needs solving.
              </p>
            </div>
            <div className="bg-[#F5F5F5] p-[20px] md:p-0 md:bg-white">
              <h1 className="text-[48px] md:text-[72px] lg:text-[120px] font-bold mb-[24px] md:mb-[32px] lg:mb-[40px]">
                03.
              </h1>
              <h3 className="text-[18px] md:text-[24px] lg:text-[32px] font-semibold mb-2 md:mb-4">
              Design
              </h3>
              <p className="text-[12px] md:text-base">
              We provide solutions, design maps, to problems. Building solutions visual maps.
              </p>
            </div>
            <div className="bg-[#F5F5F5] p-[20px] md:p-0 md:bg-white">
              <h1 className="text-[48px] md:text-[72px] lg:text-[120px] font-bold mb-[24px] md:mb-[32px] lg:mb-[40px]">
                04.
              </h1>
              <h3 className="text-[18px] md:text-[24px] lg:text-[32px] font-semibold mb-2 md:mb-4">
              Develop
              </h3>
              <p className="text-[12px] md:text-base">
              We proceed to using the best and suitable technologies to develop and building solutions.
              </p>
            </div>
            <div className="bg-[#F5F5F5] p-[20px] md:p-0 md:bg-white">
              <h1 className="text-[48px] md:text-[72px] lg:text-[120px] font-bold mb-[24px] md:mb-[32px] lg:mb-[40px]">
                05.
              </h1>
              <h3 className="text-[18px] md:text-[24px] lg:text-[32px] font-semibold mb-2 md:mb-4">
              Deploy
              </h3>
              <p className="text-[12px] md:text-base">
              We ensure products built and solutions provided are in line with standardization, ensuring quality assessments and deployments
              </p>
            </div>
            <div className="bg-[#F5F5F5] p-[20px] md:p-0 md:bg-white">
              <h1 className="text-[48px] md:text-[72px] lg:text-[120px] font-bold mb-[24px] md:mb-[32px] lg:mb-[40px]">
                06.
              </h1>
              <h3 className="text-[18px] md:text-[24px] lg:text-[32px] font-semibold mb-2 md:mb-4">
              Deliver
              </h3>
              <p className="text-[12px] md:text-base">
              We deliver solutions, while providing iterative usuablity and maintenance.
              </p>
            </div>
           
          </div>
        </section>
        <WhyChooseFaq />
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default AboutUs;
