import React from "react";
import cofeetime from "../assets/img/cofeetime.jpg";

function Experts() {
  return (
    <div className="max-w-[1240px] mx-auto p-2 my-10 md:grid grid-cols-2">
      <div className="col-span-1 md:w-[80%] text-center">
        <img src={cofeetime} alt="" />
      </div>
      <div className=" col-span-1 flex flex-col justify-center">
        <h1 className="text-[#2699fb] text-3xl font-bold my-2 text-center" >About Us</h1>
        <p className="my-2 text-justify">
          We are a team of web experts with beautiful and good experience in
          website building and marketing to help businesses grow online.
        </p>
        <h1 className="text-[#2699fb] text-xl font-bold my-2">Mission.</h1>
        <p className="my-2 text-justify">
          By developing cost-efficient, powerful, unique design and marketing
          solutions, our objective is to allow our clients to utilize the web to
          its best.
        </p>
        <h1 className="text-[#2699fb] text-xl font-bold my-2">Vision.</h1>
        <p className="my-2 text-justify">
          Our vision is to become a global leader in providing the best and
          unique web design and marketing services to improve our client's
          productivity and business strength.
        </p>
        <button className="w-[35%] bg-black text-white p-3 rounded">Get started</button>
      </div>
    </div>
  );
}

export default Experts;
