import Image from "next/image";
// import Link from "next/Link";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

function Header({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll(scrollY);
  };
  const navData = [
    { id: 1, to: "about", value: "ABOUT" },
    { id: 2, to: "courses", value: "COURSES" },
    { id: 3, to: "prices", value: "PRICES" },
    { id: 4, to: "contact", value: "CONTACT" },
  ];
  return (
    <>
      <nav
        className={`w-full h-[80px]  flex  justify-between items-center z-10 fixed  `}
      >
        <div
          className={`cursor-pointer flex-[0.3] sm:flex-[0.1] flex items-center justify-center z-10 ml-10 border-[#14213d] bg-[#14213d] shadow-lg rounded-br-[30px] h-[100px]`}
        >
          <Link
            to="hero"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
            activeClass="none"
          >
            <h1 className="text-5xl font-bold text-[#ffffff] ">PS</h1>
          </Link>
        </div>
        <div
          className={`hidden sm:flex items-center justify-between flex-[0.4] ml-10 rounded-bl-[30px] px-[20px] h-full ${
            scrollNav ? "bg-[#14213d]" : "bg-transparent"
          }`}
        >
          {navData.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={0}
              activeClass="active"
            >
              <h3
                className={`cursor-pointer text-xl font-bold z-10  ${
                  scrollNav ? " text-[#ffffff] " : "text-[#14213d]"
                }

                `}
              >
                {link.value}
              </h3>
            </Link>
          ))}
        </div>
        <div
          onClick={toggle}
          className=" block absolute top-0 right-0 translate-x-[-100%] translate-y-[60%] text-2xl cursor-pointer text-[#14213d] sm:hidden"
        >
          <FaBars />
        </div>
      </nav>
    </>
  );
}

export default Header;
