import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        MERGE0: email,
      });
  };

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  return (
    <form
      className="my-[50px] md:my-[70px] lg:my-[90px]"
      // onSubmit={(e) => handleSubmit(e)}
    >
       <p className="text-center text-white">
        {" "}
        {status === "success"
          ? "Success!"
          : "Join our email list for future updates."}
      </p>
      <div className="py-3 px-3 bg-white rounded-lg flex items-center max-w-[323px] md:max-w-[623px] mx-auto  gap-2 ">
     
        <input
          label="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-full focus:border-1 py-1 focus:outline-none focus:ring-[#124072] focus:border-[#124072]"
          value={email}
          placeholder=""
          isRequired
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-[#040C3C] text-[14px] md:text-[16px] px-2 py-2 rounded-lg text-white"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

const Mailchip = () => {
  const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default Mailchip;
