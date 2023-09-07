import React from "react";
import Questions from "./Questions";

const Faq = () => {
  return (
    <div id="faq" className="px-[16px] md:px-[30px] lg:px-[80px]  md:mx-[60px] lg:mx-[108px] mt-[40px]">
      <div className="flex flex-col md:flex-row md:gap-[10%] gap-5">
        <div className="md:w-[50%] w-full">
          {" "}
          <h2 className="lg:text-[60px] md:text-[40px] text-[24px] tracking-wide  mb-[25px] md:mb-[32px] lg:[40px]">
            Frequently asked Questions
          </h2>
        </div>

        <div className="md:w-[50%] w-full">
          <Questions
            question="What services does your agency offer?"
            answer="Our agency offers a comprehensive range of services, including software development, marketing, and design solutions. We specialize in creating custom software applications, designing captivating visual identities, and executing strategic marketing campaigns to help businesses thrive."
          />
          <Questions
            question="How experienced is your team in these fields?"
            answer="Our team is comprised of seasoned professionals with years of experience in software development, marketing, and design. We have dedicated experts in each discipline who bring a wealth of industry knowledge and innovation to every project."
          />
          <Questions
            question="Can you handle both small-scale projects and large-scale initiatives?"
            answer="   A: Absolutely. Our agency is equipped to handle projects of all sizes. Whether you're a startup looking for a small-scale software solution or an established business requiring a comprehensive marketing and design strategy, we have the expertise and resources to deliver exceptional results."
          />
          <Questions
            question="How do you ensure the quality of your deliverables?"
            answer="Quality is at the core of everything we do. We follow industry best practices, conduct rigorous testing, and maintain open lines of communication throughout the project lifecycle. Our team is dedicated to delivering solutions that meet and exceed client expectations."
          />
          <Questions
            question="Can you provide examples of past successful projects?"
            answer="Certainly. We have a portfolio showcasing a diverse range of projects we've successfully completed across software development, marketing, and design. These examples highlight our ability to tailor solutions to meet unique client needs and achieve their goals."
          />
          <Questions
            question="How do I get started with your agency for my project?"
            answer="Getting started is easy. Simply reach out to us through our website, phone, or email. Our team will schedule a consultation to understand your project requirements, goals, and timeline. From there, we'll work collaboratively to craft a customized strategy that aligns with your vision.

If you have any further questions or require additional information, feel free to contact us directly. We're here to support your business needs and bring your ideas to lif
"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
