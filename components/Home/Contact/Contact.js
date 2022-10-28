import Image from "next/image";
import React, { useRef } from "react";
import TextStyle from "../../Shared/TextStyle";
import emailjs, { sendForm } from "emailjs-com";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e9kdowo",
        "template_96x5h3j",
        form.current,
        "hWN3DMiaSUBIsY06h"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
        (message) => {
          alert(message.text);
        }
      );
    e.target.reset();
    setTimeout(() => {
      alert("email sent successfully");
    }, 300);
  };
  return (
    <div
      className="flex flex-col gap-4 space-y-2 items-center justify-center bg-[#fca311] py-10 mb-[-35px] "
      id="contact"
    >
      <TextStyle text="Contact Us" coloredIndices={[1]} />
      <p className="text-base text-[#14213d] text-center">
        Contact Us and Start Your Learning Journey,
        <br />
        One Of Our Representatives will contact you within 24 hours.
      </p>
      <div className="flex flex-wrap-reverse space-x-2 space-y-2 items-center justify-evenly w-full ">
        <div className="w-[280px] md:w-96  mx-[10px] bg-[#14213d] rounded-br-[30px] mt-[20px] md:mt-[40px]">
          <div className="p-6 ">
            <form ref={form} onSubmit={sendEmail}>
              <label className="block mb-6">
                <span className="text-[#ffffff] text-base">Your name</span>
                <input
                  type="text"
                  name="user_name"
                  className="
            w-full
            mt-1
            rounded-[5px]
            p-2
            shadow-sm
            outline-none
          "
                  placeholder="Joe Bloggs"
                />
              </label>
              <label className="block mb-6">
                <span className="text-[#ffffff] text-base">Email address</span>
                <input
                  name="user_email"
                  type="email"
                  className="
            w-full
            mt-1
            rounded-[5px]
            p-2
            shadow-sm
            outline-none
          "
                  placeholder="joe.bloggs@example.com"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-[#ffffff] text-base">Phone Number</span>
                <input
                  name="user_phone"
                  type="number"
                  className="
            w-full
            mt-1
            rounded-[5px]
            p-2
            shadow-sm
            outline-none
          "
                  placeholder="01001231234"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-[#ffffff] text-base">Message</span>
                <textarea
                  name="message"
                  className="
                  w-full
                  mt-1
                  rounded-[5px]
                  p-2
                  shadow-sm
                  outline-none
          "
                  rows="3"
                  placeholder="Tell us what course you want..."
                ></textarea>
              </label>
              <div className="mb-6">
                <button className="coursebtn" type="submit" onClick={sendForm}>
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="block relative  h-[300px] w-[280px] md:h-[500px] md:w-[500px] ">
          <Image
            src="/contactus.png"
            alt="contact"
            layout="responsive"
            height={300}
            width={280}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
