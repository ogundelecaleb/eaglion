import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper/modules";

const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="px-[16px] md:px-[30px] lg:px-[80px]  my-9">
        {" "}
        <div className="mb-8">
          <h2 className="font-bold text-[24px] md:text-[40px] lg:text-[70px] text-center">
            Don’t Take Our Word For It.
          </h2>
          <p className="text-[16px] md:text-[18px] lg:text-[24px] text-center">
            Trust our clients and their testimonials
          </p>
        </div>
        <Carousel responsive={responsive}>
          <div className="bg-[#F6F6F9] p-3 mr-5 rounded-lg">
            <h3 className="lg:text-[32px] md:text-[26px] text-[22px] font-bold mb-3 ">
              "Amazing Designs and Marketing"
            </h3>
            <p className="text-[16px] md:text-[18px] mb-4">
              Eaglion.co is one of the best Marketing Professionals anyone will
              ever find. They are detail oriented at the same time helps high
              level strategy, vision and needed actions for an organization.
              They have in-depth knowledge and experience in the different areas
              of marketing such as digital, social media and organic growth etc.
              They are clear in the approach, strategy and doesn't hesitate to
              let us know what works and what does not work based on his
              knowledge and wisdom. Eaglion is just a GEM
            </p>

            <h3 className="lg:text-[24px] md:text-[20px] text-[16px] font-bold ">
              Harish Beeram
            </h3>
            <p className="text-[#888] ">CEO, SOLUTIONSUIUX LLC.</p>
          </div>
          <div className="bg-[#F6F6F9] p-3 mr-5 rounded-lg">
          <h3 className="lg:text-[32px] md:text-[26px] text-[22px] font-bold mb-3 ">
              "Exceptional service"
            </h3>
            <p className="text-[16px] md:text-[18px] mb-4">
              Eaglion Technologies has consistently delivered exceptional
              service in website creation, mobile app development, and
              maintenance. Their professionalism, expertise, and attention to
              detail have impressed us. They have been proactive in
              communication, meeting deadlines, and addressing our requirements
              with precision. Their post-development support has been prompt and
              efficient. Overall, Eaglion Technologies has surpassed our
              expectations in service delivery. We highly recommend them for
              their outstanding work in creating and maintaining websites and
              mobile apps.
            </p>

            <h3 className="lg:text-[24px] md:text-[20px] text-[16px] font-bold ">
              Chukwuka Anago
            </h3>
            <p className="text-[#888] ">MD, BuyASAP Africa</p>
          </div>
          <div className="bg-[#F6F6F9] p-3 mr-5 rounded-lg">
          <h3 className="lg:text-[32px] md:text-[26px] text-[22px] font-bold mb-3 ">
              "Exceptional service"
            </h3>
            <p className="text-[16px] md:text-[18px] mb-4">
              Eaglion Technologies has consistently delivered exceptional
              service in website creation, mobile app development, and
              maintenance. Their professionalism, expertise, and attention to
              detail have impressed us. They have been proactive in
              communication, meeting deadlines, and addressing our requirements
              with precision. Their post-development support has been prompt and
              efficient. Overall, Eaglion Technologies has surpassed our
              expectations in service delivery. We highly recommend them for
              their outstanding work in creating and maintaining websites and
              mobile apps.
            </p>

            <h3 className="lg:text-[24px] md:text-[20px] text-[16px] font-bold ">
              Chukwuka Anago
            </h3>
            <p className="text-[#888] ">MD, BuyASAP Africa</p>
          </div>
          <div className="bg-[#F6F6F9] p-3 mr-5 rounded-lg">
          <h3 className="lg:text-[32px] md:text-[26px] text-[22px] font-bold mb-3 ">
              "Exceptional service"
            </h3>
            <p className="text-[16px] md:text-[18px] mb-4">
              Eaglion Technologies has consistently delivered exceptional
              service in website creation, mobile app development, and
              maintenance. Their professionalism, expertise, and attention to
              detail have impressed us. They have been proactive in
              communication, meeting deadlines, and addressing our requirements
              with precision. Their post-development support has been prompt and
              efficient. Overall, Eaglion Technologies has surpassed our
              expectations in service delivery. We highly recommend them for
              their outstanding work in creating and maintaining websites and
              mobile apps.
            </p>

            <h3 className="lg:text-[24px] md:text-[20px] text-[16px] font-bold ">
              Chukwuka Anago
            </h3>
            <p className="text-[#888] ">MD, BuyASAP Africa</p>
          </div>
          <div className="bg-[#F6F6F9] p-3 mr-5 rounded-lg">
          <h3 className="lg:text-[32px] md:text-[26px] text-[22px] font-bold mb-3 ">
              "Exceptional service"
            </h3>
            <p className="text-[16px] md:text-[18px] mb-4">
              Eaglion Technologies has consistently delivered exceptional
              service in website creation, mobile app development, and
              maintenance. Their professionalism, expertise, and attention to
              detail have impressed us. They have been proactive in
              communication, meeting deadlines, and addressing our requirements
              with precision. Their post-development support has been prompt and
              efficient. Overall, Eaglion Technologies has surpassed our
              expectations in service delivery. We highly recommend them for
              their outstanding work in creating and maintaining websites and
              mobile apps.
            </p>

            <h3 className="lg:text-[24px] md:text-[20px] text-[16px] font-bold ">
              Chukwuka Anago
            </h3>
            <p className="text-[#888] ">MD, BuyASAP Africa</p>
          </div>
        </Carousel>
        
        {/* <Carousel responsive={responsive}>

          <div className="bg-[#F6F6F9] p-3">
            <h3 className="lg:text-[32px] md:text-[26px] text-[22px] font-bold ">
              "Amazing Designs and Marketing"
            </h3>
            <p className="text-[16px] md:text-[18px]">
              Eaglion.co is one of the best Marketing Professionals anyone will
              ever find. They are detail oriented at the same time helps high
              level strategy, vision and needed actions for an organization.
              They have in-depth knowledge and experience in the different areas
              of marketing such as digital, social media and organic growth etc.
              They are clear in the approach, strategy and doesn't hesitate to
              let us know what works and what does not work based on his
              knowledge and wisdom. Eaglion is just a GEM
            </p>

            <h3 className="lg:text-[24px] md:text-[20px] text-[16px] font-bold ">
              Harish Beeram
            </h3>
            <p className="text-[#888] ">CEO, SOLUTIONSUIUX LLC.</p>
          </div>
          <div className="bg-[#F6F6F9] p-3">
            <h3 className="lg:text-[32px] md:text-[26px] text-[22px] font-bold ">
              "Exceptional service"
            </h3>
            <p className="text-[16px] md:text-[18px]">
              Eaglion Technologies has consistently delivered exceptional
              service in website creation, mobile app development, and
              maintenance. Their professionalism, expertise, and attention to
              detail have impressed us. They have been proactive in
              communication, meeting deadlines, and addressing our requirements
              with precision. Their post-development support has been prompt and
              efficient. Overall, Eaglion Technologies has surpassed our
              expectations in service delivery. We highly recommend them for
              their outstanding work in creating and maintaining websites and
              mobile apps.
            </p>

            <h3 className="lg:text-[24px] md:text-[20px] text-[16px] font-bold ">
              Chukwuka Anago
            </h3>
            <p className="text-[#888] ">MD, BuyASAP Africa</p>
          </div>{" "}
          <div className="bg-[#F6F6F9] p-3">
            <h3 className="lg:text-[32px] md:text-[26px] text-[22px] font-bold ">
              "Exceptional service"
            </h3>
            <p className="text-[16px] md:text-[18px]">
              Eaglion Technologies has consistently delivered exceptional
              service in website creation, mobile app development, and
              maintenance. Their professionalism, expertise, and attention to
              detail have impressed us. They have been proactive in
              communication, meeting deadlines, and addressing our requirements
              with precision. Their post-development support has been prompt and
              efficient. Overall, Eaglion Technologies has surpassed our
              expectations in service delivery. We highly recommend them for
              their outstanding work in creating and maintaining websites and
              mobile apps.
            </p>

            <h3 className="lg:text-[24px] md:text-[20px] text-[16px] font-bold ">
              Chukwuka Anago
            </h3>
            <p className="text-[#888] ">MD, BuyASAP Africa</p>
          </div>{" "}
          <div className="bg-[#F6F6F9] p-3">
            <h3 className="lg:text-[32px] md:text-[26px] text-[22px] font-bold ">
              "Exceptional service"
            </h3>
            <p className="text-[16px] md:text-[18px]">
              Eaglion Technologies has consistently delivered exceptional
              service in website creation, mobile app development, and
              maintenance. Their professionalism, expertise, and attention to
              detail have impressed us. They have been proactive in
              communication, meeting deadlines, and addressing our requirements
              with precision. Their post-development support has been prompt and
              efficient. Overall, Eaglion Technologies has surpassed our
              expectations in service delivery. We highly recommend them for
              their outstanding work in creating and maintaining websites and
              mobile apps.
            </p>

            <h3 className="lg:text-[24px] md:text-[20px] text-[16px] font-bold ">
              Chukwuka Anago
            </h3>
            <p className="text-[#888] ">MD, BuyASAP Africa</p>
          </div>{" "}
          <div className="bg-[#F6F6F9] p-3">
            <h3 className="lg:text-[32px] md:text-[26px] text-[22px] font-bold ">
              "Exceptional service"
            </h3>
            <p className="text-[16px] md:text-[18px]">
              Eaglion Technologies has consistently delivered exceptional
              service in website creation, mobile app development, and
              maintenance. Their professionalism, expertise, and attention to
              detail have impressed us. They have been proactive in
              communication, meeting deadlines, and addressing our requirements
              with precision. Their post-development support has been prompt and
              efficient. Overall, Eaglion Technologies has surpassed our
              expectations in service delivery. We highly recommend them for
              their outstanding work in creating and maintaining websites and
              mobile apps.
            </p>

            <h3 className="lg:text-[24px] md:text-[20px] text-[16px] font-bold ">
              Chukwuka Anago
            </h3>
            <p className="text-[#888] ">MD, BuyASAP Africa</p>
          </div>
        </Carousel>
         */}
      </div>
    </>
  );
};

export default Testimonial;
