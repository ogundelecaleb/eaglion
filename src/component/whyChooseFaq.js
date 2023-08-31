import React from "react";
import Questions from "./Questions";

const WhyChooseFaq = () => {
  return (
    <div className="px-[16px] md:px-[30px] lg:px-[80px]  mt-[40px]">
      <div className="flex flex-col md:flex-row md:gap-[10%] gap-5">
        <div className="md:w-[50%] w-full">
          {" "}
          <h2 className="lg:text-[60px] md:text-[40px] text-[24px] tracking-wide  mb-[25px] md:mb-[32px] lg:[40px]">
            Why Choose Us?{" "}
          </h2>
        </div>

        <div className="md:w-[50%] w-full">
          <Questions
            question="What sets your software development, marketing, and design agency apart from the competition?"
            answer="Our agency brings a unique blend of expertise in software development, marketing, and design under one roof. This integrated approach allows us to deliver holistic solutions that not only meet your technical needs but also align with your brand identity and marketing goals.
"
          />
          <Questions
            question="How do you ensure the success of software projects?"
            answer="We prioritize collaboration and clear communication throughout the project lifecycle. Our experienced team follows industry best practices, agile methodologies, and rigorous testing to ensure that the software solutions we deliver are reliable, scalable, and aligned with your business objectives."
          />
          <Questions
            question="What makes your design services stand out?"
            answer="Our design team doesn't just create visuals; we craft experiences. We focus on user-centric design principles to ensure that our designs are not only aesthetically pleasing but also intuitive, enhancing user engagement and satisfaction."
          />
          <Questions question="How do your marketing strategies drive results?" answer=" Our marketing strategies are data-driven and tailored to your unique goals. We analyze market trends, customer behavior, and competitor landscapes to create campaigns that resonate with your target audience, driving brand awareness, lead generation, and conversions." />
          <Questions question="Can you handle projects of different sizes and industries?" answer="Absolutely. Our agency has a versatile team with experience across various industries and project scales. Whether you're a startup, a small business, or an enterprise, we have the expertise to deliver solutions that cater to your specific needs and challenges." />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseFaq;
