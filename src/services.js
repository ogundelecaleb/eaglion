import React from "react";
import Navbar from "./component/navbar";
import ServiceCard from "./component/serviceCard";
import Newsletter from "./component/newsletter";
import Footer from "./component/footer";

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="px-[16px] md:px-[30px] lg:px-[80px]  lg:pt-[60px]">
        <div className="py-[32px] lg:py-[80px]  border-b border-dotted">
          <div className="w-full  flex mb-4 ">
            <button className="px-[20px]   md:px-[28px] py-[8px] md:py-[14px] rounded-[40px] border mx-auto">
              Transforming ideas into reality
            </button>
          </div>
          <div className="relative">
            <h2 className="text-[24px] md:text-[32px] lg:text-[70px] font-bold text-center   transition-all  text-transparent bg-clip-text bg-gradient-to-b to-white via-black from-[#111111]">
              Services That We Offer
            </h2>
            <p className="font-normal text-[#2E2E2E] text-base md:text-lg text-center">
              We are a technology service company. We are experts at website
              design, development, management, and IT consulting.
            </p>
            <img
              src="/float-text.png"
              alt=""
              className="absolute hidden lg:inline-block right-[8%] top-1"
            />
            <img
              src="/float-text2.png"
              alt=""
              className="absolute hidden lg:inline-block top-1 left-[8%]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[10px] md:gap-[20px] py-[32px] lg:py-[80px]">
          <ServiceCard
            icon="/pen.png"
            head="Product Design"
            description="We provide product research, design, testing services. We engage latest trends, technology and skills to provide you with a market fit, usable product."
          />
          <ServiceCard
            icon="/dumpster.png"
            head="e-commerce"
            description="We provide industry standard eCommerce website development, operations, logistics and consultancy services."
          />
          <ServiceCard
            icon="/dumpster.png"
            head="Web Design"
            description="We provide expert email design and marketing services. We help you improve your customer retention and bottom-line through continuous iterative designs and testing.."
          />
          <ServiceCard
            icon="/dumpster.png"
            head="Software Development"
            description="We provide software development services. Our expert frontend, backend developers and team of product managers will help develop and bring your idea or product to life."
          />
          <ServiceCard
            icon="/dumpster.png"
            head="Email Marketing"
            description="We provide expert email design and marketing services. We help you improve your customer retention and bottom-line through continuous iterative designs and testing."
          />
          <ServiceCard
            icon="/dumpster.png"
            head="Marketing"
            description="We help give your products and services a voice and visibility through campaign strategy, development, and execution."
          />
          <ServiceCard
            icon="/dumpster.png"
            head="Social Media"
            description="We provide social media management, community administration, and marketing. Social campaign activation and influencer engagement management."
          />
          <ServiceCard
            icon="/dumpster.png"
            head="Business Operations"
            description="We provide business operations consulting to corporate organizations and SMEs. With us we ensure you execute SMART goals, reduce redundancy, improve sales and reduce costs."
          />
          <ServiceCard
            icon="/dumpster.png"
            head="Brand Design & Printing"
            description="We provide branding, design, and printing services to individuals, corporate organizations, parastatals, and religious organizations."
          />
          <ServiceCard
            icon="/dumpster.png"
            head="Training & Consulting"
            description="We provide consulting services and training to corporate organizations to enhance human resource and capacity."
          />
          <ServiceCard
            icon="/dumpster.png"
            head="Lead Generation"
            description="We provide and help you generate leads for your products, and services. From emails, phone numbers, to HNI leads."
          />
          <ServiceCard
            icon="/dumpster.png"
            head="Help & Support"
            description="We provide in person or remote software and hardware repairs, support, and troubleshooting to organizations and individuals."
          />
        </div>
      </div>{" "}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Services;
