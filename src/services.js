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
              className="absolute hidden lg:inline-block right-[20px] top-1"
            />
            <img
              src="/float-text2.png"
              alt=""
              className="absolute hidden lg:inline-block top-1 left-[20px]"
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
        <div className="bg-[#FAFAFA] p-[20px] lg:-[42px] rounded-lg">
        <div className="mb-5">
          <p className="text-sm md:text-base lg:text-lg ">Customer’s expectation</p>
          <h3 className="text-xl md:text-[36px] lg:text-[60px] font-bold">What to expect</h3>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-[40px] md:gap-[10%]">
          <p className="w-full md:w-[50%] self-end text-base lg:text-[24xp] text-[#6A6A6A] ">
            Create Amazing Websites for Business, Startup, NGO, SME and personal
            projects. We are the real deal; all your business and technology
            need in one place.
          </p>
          <div className="w-full md:w-[50%]">
            <ul className="p-[18px] md:p-[20px] lg:p-[24px] bg-white rounded-lg">
              <li className="border-b ">
                <h2 className="font-semibold text-base md:text-xl lg:text-2xl mb-[16px] "># Innovative Solutions</h2>
                <p className="text-[12px] md:text-[16px] font-thin pb-[16px] ">
                  Customer expect us to provide them with innovative and
                  cutting-edge solutions that address their unique challenges.
                </p>
              </li>
              <li className="border-b ">
              <h2 className="font-semibold text-base mt-[16px] md:text-xl lg:text-2xl mb-[16px] "># Expertise and Guidance</h2>
              <p className="text-[12px] md:text-[16px] font-thin pb-[16px] ">
                  Customers rely on our guidance, recommendations, and expertise
                  that can drive their projects to success.
                </p>
              </li>
              <li className="border-b ">
              <h2 className="font-semibold text-base mt-[16px] md:text-xl lg:text-2xl mb-[16px] "># Scalability and Future-Proofing</h2>
              <p className="text-[12px] md:text-[16px] font-thin pb-[16px] ">
                  Customers anticipate solutions that can adapt and scale as
                  their business grow.
                </p>
              </li>
              <li className="border-b ">
              <h2 className="font-semibold text-base mt-[16px] md:text-xl lg:text-2xl mb-[16px] "># Value for Investment</h2>
              <p className="text-[12px] md:text-[16px] font-thin pb-[16px] ">
                  Customers expect our services to provide tangible value. They
                  want to see a return on their investments
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>{" "}
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Services;
