import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

function CourseCard({ src, title, description }) {
  return (
    <div className="w-[280px] rounded-br-[30px] flex flex-col h-fit space-y-4 items-center justify-center text-center bg-[#002e4f] px-6 pb-6 shadow-lg">
      <Image src={src} alt={title} layout="fixed" width={280} height={200} />
      <h3 className="text-2xl font-bold text-[#ffffff] flex gap-x-2 items-center">
        {title}
      </h3>
      <p className="text-base font-medium text-[#ffffff]">{description}</p>
      <Link
        to="contact"
        smooth={true}
        duration={1000}
        spy={false}
        exact="true"
        offset={0}
      >
        <button className="coursebtn">Enroll Now</button>
      </Link>
    </div>
  );
}

export default CourseCard;
