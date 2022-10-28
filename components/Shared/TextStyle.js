import React from "react";

function TextStyle({ text, coloredIndices }) {
  if (text.split(" ").length < Math.max(...coloredIndices)) {
    throw new Error("Colored Indexes out of bounds");
  }
  const splitText = text.trim().split(" ");
  const finalText = splitText.map((word, index) => {
    return (
      <h1
        className="text-2xl sm:text-5xl font-semibold relative whitespace-normal text-[#14213d] "
        key={index}
      >
        {word}
        {coloredIndices.includes(index) ? (
          <svg
            className="absolute top-[20px] right-[-25px] z-[-1] "
            width="100"
            height="31"
            viewBox="0 0 141 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16H125V16C125 24.2843 118.284 31 110 31H0V16Z"
              fill="#e5e5e5"
            />
            <path
              d="M125 0V0C133.837 0 141 7.16344 141 16V16H125V0Z"
              fill="#14213D"
            />
          </svg>
        ) : (
          ""
        )}
      </h1>
    );
  });
  return (
    <div className="flex flex-wrap	gap-x-4	text-center items-center z-0">
      {finalText}
    </div>
  );
}

export default TextStyle;
