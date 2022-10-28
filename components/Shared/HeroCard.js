import React from "react";
import { MdWork, MdOutlineGroups } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const cardData = [
  {
    id: 1,
    title: "Small Group Sessions",
    description:
      "3-6 students per group in order to give you enough attention to achieve your goals more quickly.",
    icon: <MdOutlineGroups />,
  },
  {
    id: 2,
    title: "Low Cost",
    description:
      "Money is our last concern, Enjoy an excellent educational experience at the lowest possible price.",
    icon: <GiReceiveMoney />,
  },
  {
    id: 3,
    title: "Career Support",
    description:
      "We'll help you build your CV, train you for interviews, and teach you how to market yourself.",
    icon: <MdWork />,
  },
];

function HeroCard() {
  return (
    <div
      className="flex flex-wrap gap-6 justify-center items-center"
      style={{
        background:
          "linear-gradient(to bottom, #fca311 0%,#fca311 50%,#fca311 50%,white 50%,white 100%)",
      }}
    >
      {cardData.map((item) => (
        <div
          key={item.id}
          className={` relative flex flex-col items-start p-8 justify-center gap-4 text-start w-[300px] sm:w-[400px] h-[200px] shadow-lg rounded-br-[30px] ${
            item.id === 1
              ? "bg-[#002e4f]"
              : item.id === 2
              ? "bg-[#9d0208]"
              : "bg-[#034732]"
          }`}
        >
          <h1 className="text-2xl font-bold text-[#ffffff] flex gap-x-2 items-center">
            {item.icon}
            {item.title}
          </h1>
          <p className="text-base font-medium text-[#ffffff]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HeroCard;
