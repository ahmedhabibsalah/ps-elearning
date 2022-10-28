import Image from "next/image";
import React from "react";
import TextStyle from "../../Shared/TextStyle";

function About() {
  return (
    <div
      className="w-full flex items-center justify-center bg-[#ffffff] my-8 relative"
      id="about"
    >
      <div className="absolute lg:block hidden right-[0px]">
        <Image
          src="/arr1.png"
          alt="arrow"
          layout="fixed"
          height={300}
          width={300}
        />
      </div>
      <div className="absolute lg:block hidden left-[0px] scale-x-[-1]">
        <Image
          src="/arr1.png"
          alt="arrow"
          layout="fixed"
          height={300}
          width={300}
        />
      </div>
      <div className="gradient rounded-[15px] sm:rounded-[50%] sm:w-[600px] w-[300px] sm:h-[600px] h-fit gap-6 bg-[#fca311] flex items-center justify-center text-center flex-col p-12">
        <TextStyle text="About US" coloredIndices={[1]} />
        <p className="text-base text-[#14213d]">
          PS is an educational platform created by a group of developers and
          engineers specialized in programming, who previously worked with the
          largest e-learning companies in the world such as Udacity. Our biggest
          goal is to provide valuable educational content at the lowest price.
        </p>
      </div>
    </div>
  );
}

export default About;
