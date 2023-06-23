import React from "react";
import Typed from "react-typed";

function Banner() {
  return (
    <div className="bg-[#2699fb] w-full py-[100px]">
      <div className="max-w-[1240px] my-[100px] mx-auto font-bold text-center">
        <h2 className="text-white text-3xl md:text-[80px] md:p-[24px]">
          IT Solutions & Services
        </h2>
        <div className="text-[18px] p-[15px] md:text-[30px] md:p-[24px] text-white">
          We Provide{" "}
          <Typed
            className="pl-3 text-white"
            strings={[
              "Web Developer",
              "Digital Marketing",
              "Mobile App Development",
            ]}
            typeSpeed={100}
            loop={true}
            backSpeed={120}
          />
        </div>
        <div className="text-xl p-[15px] md:text-2xl md:p-[24px] text-white">
          Providing the <b className="text-[black]">simplest</b> solution for the
          most <b className="text-[black]">complex</b> problem
        </div>
        <button className="bg-black text-white p-3 rounded">Get started</button>
      </div>
    </div>
  );
}

export default Banner;
