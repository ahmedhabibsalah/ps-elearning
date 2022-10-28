import Image from "next/image";
import React, { useState } from "react";
import CourseCard from "../../Shared/CourseCard";
import TextStyle from "../../Shared/TextStyle";

const optionData = [
  { id: 1, value: "Adult Courses" },
  { id: 2, value: "Kids Courses" },
];

const coursesData = [
  {
    id: 1,
    infoT: [
      {
        id: 1,
        text: "Ages 12 to 25",
      },
      { id: 2, text: "36 Sessions" },
    ],

    infoL: [
      { id: 1, text: "6 Projects" },
      { id: 2, text: " Learn CSS & Website Layout, JavaScript and the DOM" },
    ],
    title: "Front-End Development",
    description:
      "Learn how to build high quality websites and dynamic applications to create stunning user experiences for the web using HTML, CSS, JS, and ReactJS",
    src: "/frontend.webp",
    infoR: [
      {
        id: 1,
        text: " Learn ReactJS, Web APIs and Asynchronous Applications ",
      },
      { id: 2, text: " Build Tools, Webpack, and Service Worker" },
    ],
    infoB: [
      { id: 1, text: " No previous experience needed" },
      { id: 2, text: " Lifetime access to the course's content " },
    ],
  },
  {
    id: 2,
    infoT: [
      {
        id: 1,
        text: " Ages 8 to 16",
      },
      { id: 2, text: " 16 Sessions" },
    ],
    infoL: [{ id: 1, text: " 10+ Projects" }],
    title: "Scratch",
    description:
      "Learn Scratch Programming online, Scratch is the best educational programming software for kids available today.",
    src: "/scratch.jpg",
    infoR: [{ id: 1, text: " Weekly follow-up with parents" }],
    infoB: [
      { id: 1, text: " No previous experience needed" },
      { id: 2, text: " Lifetime access to the course's content" },
    ],
  },
];
const primCol = ["#034732", "#9d0208", "#002e4f"];

function Courses() {
  const [isActive, setIsActive] = useState(1);
  const filtered = coursesData.filter((obj) => {
    return obj.id === isActive;
  });
  return (
    <section
      className="w-full flex flex-col  items-center justify-center bg-[#fca311]  my-4 relative py-10"
      id="courses"
    >
      <div className="flex flex-col space-y-8 items-center justify-center p-8 text-center">
        <TextStyle text="Best Courses" coloredIndices={[1]} />
        <p className="text-base text-[#14213d]">
          We offer the Best programming courses for your skill level and career
          goals.
          <br />
          Our courses for both adults and kids.
        </p>
        <div className="flex items-center justify-center gap-x-[20px] relative mt-3">
          {optionData.map((option, index) => (
            <>
              <button
                key={option.id}
                className={`${
                  isActive === option.id
                    ? "bg-[#14213d] text-[#ffffff]"
                    : "bg-transparent text-[#14213d]"
                }`}
                onClick={() => setIsActive(option.id)}
              >
                {option.value}
              </button>
              <div
                className={`absolute top-[-40px] ${
                  isActive === option.id ? "left-[-40px] " : "left-[160px]"
                }
                ${(index + 1) / optionData.length == 1 ? "hidden" : "block"}
                `}
                onClick={() => setIsActive(option.id)}
              >
                <Image
                  src="/Untitled.png"
                  alt="selected"
                  layout="fixed"
                  height={150}
                  width={260}
                />
              </div>
            </>
          ))}
        </div>
      </div>
      {filtered.map((course) => (
        <div
          className="flex flex-col justify-center items-center w-full p-10 gap-6 "
          key={course.id}
        >
          <div className="flex flex-wrap gap-12 order-2 lg:order-1 justify-center items-center">
            {course.infoT.map((info, index) => (
              <div
                key={info.id}
                className={` relative flex flex-col items-start p-8 justify-center gap-0 lg:gap-4 text-start w-[280px] h-[200px] shadow-lg rounded-br-[30px] ${
                  index + 1 / primCol.length > 1
                    ? `bg-[${primCol[index % primCol.length]}]`
                    : `bg-[${primCol[index]}]`
                }`}
              >
                <h1 className="text-2xl font-bold text-[#ffffff] flex gap-x-2 items-center">
                  {info.text}
                </h1>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center lg:justify-between items-center w-full max-w-[1000px] order-1 lg:order-2 gap-4">
            <div className="flex flex-col gap-12 order-2 lg:order-1">
              {course.infoL.map((info, index) => (
                <div
                  key={info.id}
                  className={` relative flex flex-col items-start p-8 justify-center gap-4 text-start w-[280px] h-[200px] shadow-lg rounded-br-[30px] ${
                    index + 1 / primCol.length > 1
                      ? `bg-[${primCol[index % primCol.length]}]`
                      : `bg-[${primCol[index]}]`
                  }`}
                >
                  <h1 className="text-2xl font-bold text-[#ffffff] flex gap-x-2 items-center">
                    {info.text}
                  </h1>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2 m-6">
              <CourseCard
                src={course.src}
                title={course.title}
                description={course.description}
              />
            </div>
            <div className="flex flex-col  gap-12 order-3">
              {course.infoR.map((info, index) => (
                <div
                  key={info.id}
                  className={` relative flex flex-col items-start p-8 justify-center gap-4 text-start w-[280px] h-[200px] shadow-lg rounded-br-[30px] ${
                    index + 1 / primCol.length > 1
                      ? `bg-[${primCol[index % primCol.length]}]`
                      : `bg-[${primCol[index]}]`
                  }`}
                >
                  <h1 className="text-2xl font-bold text-[#ffffff] flex gap-x-2 items-center">
                    {info.text}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap  gap-12 order-3 items-center justify-center">
            {course.infoB.map((info, index) => (
              <div
                key={info.id}
                className={` relative flex flex-col items-start p-8 justify-center gap-4 text-start w-[280px] h-[200px] shadow-lg rounded-br-[30px] ${
                  index + 1 / primCol.length > 1
                    ? `bg-[${primCol[index % primCol.length]}]`
                    : `bg-[${primCol[index]}]`
                }`}
              >
                <h1 className="text-2xl font-bold text-[#ffffff] flex gap-x-2 items-center">
                  {info.text}
                </h1>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Courses;
