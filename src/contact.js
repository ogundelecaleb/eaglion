import React from "react";
import Navbar from "./component/navbar";
import Form from "./component/form";
import Footer from "./component/footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="px-[16px] md:px-[30px] lg:px-[80px] mb-[42px] md:mb-[70px]  ">
        <div className="mt-[32px] md:mt-[72px] py-[60px] md:py-[90px] lg:py-[130px] bg-[#FAFAFA] rounded-2xl relative">
          <h2 className="text-[24px] md:text-[32px] lg:text-[70px] font-bold text-center   transition-all  text-transparent bg-clip-text bg-gradient-to-b to-white via-black from-[#111111] mb-2 md:mb-4">
            Contact Us
          </h2>
          <p className="text-center text-[#2E2E2E] text-[16px] md:text-[18px]">
            We’d love to hear from you. So, feel free to get in touch with us.
          </p>
          <img
            src="/man-exclaim.png"
            alt="exclaim"
            className="absolute hidden lg:flex right-0 bottom-0"
          />
        </div>
        <Form />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[32px] md:pt-[72px]  lg:pt-[120px] gap-4">
          <div className="border rounded-lg p-[40px] shadow">
            <svg
              className="mb-5"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.9993 20.9998C28.9993 24.8698 25.6393 27.9998 21.4993 27.9998L20.5693 29.1198L20.0193 29.7798C19.5493 30.3398 18.6493 30.2197 18.3393 29.5497L16.9993 26.5997C15.1793 25.3197 13.9993 23.2898 13.9993 20.9998C13.9993 17.1298 17.3593 13.9998 21.4993 13.9998C24.5193 13.9998 27.1293 15.6698 28.2993 18.0698C28.7493 18.9598 28.9993 19.9498 28.9993 20.9998Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M34.001 24.86C34.001 27.15 32.821 29.1801 31.001 30.4601L29.661 33.41C29.351 34.08 28.451 34.2101 27.981 33.6401L26.501 31.86C24.081 31.86 21.921 30.7901 20.571 29.1201L21.501 28.0001C25.641 28.0001 29.001 24.8701 29.001 21.0001C29.001 19.9501 28.751 18.9601 28.301 18.0701C31.571 18.8201 34.001 21.58 34.001 24.86Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.0007 21H24.0007"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="0.3"
                y="0.3"
                width="47.4"
                height="47.4"
                rx="7.7"
                stroke="#2E2E2E"
                stroke-width="0.6"
              />
            </svg>
            <h4 className="text-lg md:text-2xl textfont-semibold mb-2">Chat support</h4>
            <p className="mb-4 font-normal text-[#2E2E2E] text-base md:text-lg text">We’re here to help.</p>
            <button className="py-2 text-center text-white  w-full bg-[#040C3C] rounded-lg">
              hi@eaglion.co
            </button>
          </div>
          <div className="border rounded-lg p-[40px] shadow">
            {" "}
            <svg
              className="mb-5"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.97 30.33C33.97 30.69 33.89 31.06 33.72 31.42C33.55 31.78 33.33 32.12 33.04 32.44C32.55 32.98 32.01 33.37 31.4 33.62C30.8 33.87 30.15 34 29.45 34C28.43 34 27.34 33.76 26.19 33.27C25.04 32.78 23.89 32.12 22.75 31.29C21.6 30.45 20.51 29.52 19.47 28.49C18.44 27.45 17.51 26.36 16.68 25.22C15.86 24.08 15.2 22.94 14.72 21.81C14.24 20.67 14 19.58 14 18.54C14 17.86 14.12 17.21 14.36 16.61C14.6 16 14.98 15.44 15.51 14.94C16.15 14.31 16.85 14 17.59 14C17.87 14 18.15 14.06 18.4 14.18C18.66 14.3 18.89 14.48 19.07 14.74L21.39 18.01C21.57 18.26 21.7 18.49 21.79 18.71C21.88 18.92 21.93 19.13 21.93 19.32C21.93 19.56 21.86 19.8 21.72 20.03C21.59 20.26 21.4 20.5 21.16 20.74L20.4 21.53C20.29 21.64 20.24 21.77 20.24 21.93C20.24 22.01 20.25 22.08 20.27 22.16C20.3 22.24 20.33 22.3 20.35 22.36C20.53 22.69 20.84 23.12 21.28 23.64C21.73 24.16 22.21 24.69 22.73 25.22C23.27 25.75 23.79 26.24 24.32 26.69C24.84 27.13 25.27 27.43 25.61 27.61C25.66 27.63 25.72 27.66 25.79 27.69C25.87 27.72 25.95 27.73 26.04 27.73C26.21 27.73 26.34 27.67 26.45 27.56L27.21 26.81C27.46 26.56 27.7 26.37 27.93 26.25C28.16 26.11 28.39 26.04 28.64 26.04C28.83 26.04 29.03 26.08 29.25 26.17C29.47 26.26 29.7 26.39 29.95 26.56L33.26 28.91C33.52 29.09 33.7 29.3 33.81 29.55C33.91 29.8 33.97 30.05 33.97 30.33Z"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
              <rect
                x="0.3"
                y="0.3"
                width="47.4"
                height="47.4"
                rx="7.7"
                stroke="#2E2E2E"
                stroke-width="0.6"
              />
            </svg>
            <h4 className="text-lg md:text-2xl textfont-semibold mb-2">Call Us</h4>
            <p className="mb-2 font-normal text-[#2E2E2E] text-base md:text-lg text">US: +1341241271</p>
            <p className="mb font-normal text-[#2E2E2E] text-base md:text-lg text">NG: +2348149418615</p>
          </div>
          <div className="border rounded-lg p-[40px] shadow">
            <svg
              className="mb-5"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9999 25.4299C25.723 25.4299 27.1199 24.0331 27.1199 22.3099C27.1199 20.5868 25.723 19.1899 23.9999 19.1899C22.2768 19.1899 20.8799 20.5868 20.8799 22.3099C20.8799 24.0331 22.2768 25.4299 23.9999 25.4299Z"
                stroke="black"
                stroke-width="1.5"
              />
              <path
                d="M15.6197 20.49C17.5897 11.83 30.4197 11.84 32.3797 20.5C33.5297 25.58 30.3697 29.88 27.5997 32.54C25.5897 34.48 22.4097 34.48 20.3897 32.54C17.6297 29.88 14.4697 25.57 15.6197 20.49Z"
                stroke="black"
                stroke-width="1.5"
              />
              <rect
                x="0.3"
                y="0.3"
                width="47.4"
                height="47.4"
                rx="7.7"
                stroke="#2E2E2E"
                stroke-width="0.6"
              />
            </svg>

            <h4 className="text-lg md:text-2xl textfont-semibold mb-2">Visit us</h4>
            <p className="mb-2 font-normal text-[#2E2E2E] text-base md:text-lg text">NG: 20, Abioro street, Lekki, Lagos</p>
            <p className="font-normal text-[#2E2E2E] text-base md:text-lg text">US: 1603 Capitol avenue, Suite 413A, Cheyenne,Wyoming</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
