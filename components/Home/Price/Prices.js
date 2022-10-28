import Image from "next/image";
import React from "react";
import TextStyle from "../../Shared/TextStyle";

const data = [
  "• One-time or monthly payments are allowed.",
  "• Payments are made through Vodafone Cash, PayPal or Direct Bank Transaction.",
  "• Payment is allowed after the first week of trial.",
  //   "• The refund policy states that in the case of a request for a refund, this is allowed for those who paid in one payment only, and 50% is deducted in the event that more than two weeks have passed, and no refund is allowed after the end of the fourth week of the course.",
];

const pricesData = [
  {
    id: 1,
    title: "Front-End Development Course",
    month: "550 EGP",
    full: "1000 EGP",
  },
  {
    id: 2,
    title: "Scratch Programming Course",
    month: "400 EGP",
    full: "700 EGP",
  },
];

function Prices() {
  return (
    <section className=" bg-[#ffffff] m-4 py-6" id="prices">
      <div className="relative items-center flex flex-col  gap-4 ">
        <div className="absolute lg:block hidden top-0 left-[200px] scale-x-[-1] scale-y-[-1] z-[0]">
          <Image
            src="/arr2.png"
            alt="arrow"
            layout="fixed"
            height={200}
            width={200}
          />
        </div>
        <div className="absolute lg:block hidden top-0 right-[200px] z-[0]">
          <Image
            src="/arr2.png"
            alt="arrow"
            layout="fixed"
            height={200}
            width={200}
          />
        </div>
        <TextStyle text="Prices Plans" coloredIndices={[1]} />
        <div className="flex flex-col space-y-4 text-start z-10">
          {data.map((item, index) => (
            <p className="text-base text-[#14213d] font-semibold" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-4  flex-wrap w-full mt-12">
        {pricesData.map((price) => (
          <div
            key={price.id}
            className={` relative flex flex-col items-start p-8 justify-center gap-4 text-start w-[300px] sm:w-[400px] h-[200px] shadow-lg rounded-br-[30px] ${
              price.id === 1 ? "bg-[#034732]" : "bg-[#9d0208]"
            }`}
          >
            <h1 className="text-2xl font-bold text-[#ffffff] flex gap-x-2 items-center">
              {price.title}
            </h1>
            <p className="text-base font-medium text-[#ffffff]">
              Full Price: {price.full}
            </p>
            <p className="text-base font-medium text-[#ffffff]">
              Monthly Price: {price.month}
            </p>
          </div>
        ))}
      </div>
      <p className="text-xs text-[#14213d] font-bold mt-8">
        • The refund policy states that in the case of a request for a refund,
        this is allowed for those who paid in one payment only, and 50% is
        deducted in the event that more than two weeks have passed, and no
        refund is allowed after the end of the fourth week of the course.
      </p>
    </section>
  );
}

export default Prices;
