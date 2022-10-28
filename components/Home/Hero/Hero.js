import React from "react";
import { Link } from "react-scroll";
import HeroCard from "../../Shared/HeroCard";
import TextStyle from "../../Shared/TextStyle";

function Hero() {
  return (
    <>
      <section
        className="w-full flex items-center justify-center bg-[#fca311] h-fit  px-10 pt-40 pb-20"
        id="hero"
      >
        <div className="flex flex-col space-y-8 items-center justify-center">
          <TextStyle
            text="Start Your Learning Journey With PS"
            coloredIndices={[5]}
          />
          <p className="text-base text-[#14213d]">
            PS is a remote-based company aiming to prove that anyone can learn
            how to code at the lowest cost.
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            spy={false}
            exact="true"
            offset={0}
          >
            <button>Start Learning</button>
          </Link>
        </div>
      </section>
      <HeroCard />
    </>
  );
}

export default Hero;
