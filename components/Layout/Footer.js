import React from "react";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-scroll";

const navData = [
  { id: 1, to: "about", value: "ABOUT" },
  { id: 2, to: "courses", value: "COURSES" },
  { id: 3, to: "prices", value: "PRICES" },
  { id: 4, to: "contact", value: "CONTACT" },
];

const socials = [
  {
    id: 2,
    value: "FaceBook",
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/people/PS-E-Learning/100086914766505/",
  },
  {
    id: 3,
    value: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/company/ps-e-learning/",
  },
  {
    id: 4,
    value: "Twitter",
    icon: <FaTwitter />,
    href: "https://mobile.twitter.com/ps_elearning",
  },
];

function Footer() {
  return (
    <section className="flex flex-col items-center justify-center p-8 mt-8 bg-[#14213d]">
      <div className="flex flex-wrap items-center justify-between w-full">
        <div className="flex flex-col space-y-4 ">
          {navData.map((link) => (
            <h4
              key={link.id}
              className="text-lg text-[#ffffff] cursor-pointer hover:text-[#fca311]"
            >
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
                activeClass="none"
              >
                {link.value}
              </Link>
            </h4>
          ))}
        </div>

        <div className="flex flex-col space-y-4 ">
          {socials.map((social) => (
            <a
              key={social.id}
              className="flex items-center gap-2 text-lg text-[#ffffff] cursor-pointer hover:text-[#fca311] no-underline	"
              href={social.href}
              target="_blank"
            >
              {social.icon}
              {social.value}
            </a>
          ))}
        </div>
        <div className="flex flex-col space-y-4 ">
          <h4 className="text-lg text-[#ffffff] flex flex-col">
            Phone Number <b>(+2)01069236931</b>
          </h4>
          <h4 className="text-lg text-[#ffffff] flex flex-col">
            Email Address <b>teamps.elearning@gmail.com</b>
          </h4>
        </div>
      </div>
      <p className="text-xl text-[#fca311] mt-4">
        Copyright &copy; {new Date().getFullYear()}PS All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;
