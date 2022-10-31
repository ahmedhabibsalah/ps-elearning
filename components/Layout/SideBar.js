import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const navData = [
  { id: 1, to: "about", value: "ABOUT" },
  { id: 2, to: "courses", value: "COURSES" },
  { id: 3, to: "prices", value: "PRICES" },
  { id: 4, to: "contact", value: "CONTACT" },
];
function SideBar({ isOpen, toggle }) {
  return (
    <aside
      className={`fixed z-[999] w-full h-full bg-[#14213d] grid place-items-center	 top-0 left-0 ease-in-out delay-75 ${
        isOpen ? "opacity-100" : "opacity-0"
      } ${isOpen ? "top-0" : "top-[-100%]"}
      `}
      isOpen={isOpen}
      onClick={toggle}
    >
      <div
        onClick={toggle}
        className="absolute top-[1.2rem] right-[1.5rem] bg-transparent text-3xl cursor-pointer outline-none text-[#ffffff]"
      >
        <FaTimes />
      </div>
      <div className="text-[#fff]">
        <ul className="grid grid-cols-1 grid-rows-[repeat(4,60px)]	sm:grid-rows-[repeat(4,80px)] text-center">
          {navData.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={0}
              activeClass="active"
            >
              <h3 className=" text-xl font-bold text-[#fff] ease-in-out delay-7 cursor-pointer">
                {link.value}
              </h3>
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
