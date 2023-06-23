import React from "react";
import { MdDesignServices } from "react-icons/md";

function Cards() {
  return (
    <div className="py-[100px]">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6 ">
        <div className="shadow-xl h-[400px] my-2 hover:bg-gray-100 hover:scale-105 duration-500 p-5 text-justify">
          <div className="pt-5">
            <MdDesignServices className="text-[#2699FB] text-[60px]" />
          </div>
          <div className="pt-10 text-[#2699FB] text-xl font-bold">
            Creative Design
          </div>
          <div className="pt-6">
            Our team of professional graphic and web designers will help you
            with unique and creative logo and website designs that will match
            your business.
          </div>
          <div className="pt-6">
            <button className="bg-[black] text-white p-3 rounded hover:bg-[#2699FB]">
              Learn More
            </button>
          </div>
        </div>
        <div className="shadow-xl h-[400px] my-2 hover:bg-gray-100 hover:scale-105 duration-500 p-5 text-justify">
          <div className="pt-5">
            <MdDesignServices className="text-[#2699FB] text-[60px]" />
          </div>
          <div className="pt-10 text-[#2699FB] text-xl font-bold">
            Research & Development
          </div>
          <div className="pt-6">
            We help you develop the right website with a good user interface
            built after a lot of research in the industry to help you make the
            best out of it.
          </div>
          <div className="pt-6">
            <button className="bg-[black] text-white p-3 rounded hover:bg-[#2699FB]">
              Learn More
            </button>
          </div>
        </div>
        <div className="shadow-xl h-[400px] my-2 hover:bg-gray-100 hover:scale-105 duration-500 p-5 text-justify">
          <div className="pt-5">
            <MdDesignServices className="text-[#2699FB] text-[60px]" />
          </div>
          <div className="pt-10 text-[#2699FB] text-xl font-bold">
            Branding & Marketing
          </div>
          <div className="pt-6">
            Need help with branding and marketing to reach out to a larger
            audience? We can help you create a brand presence and marketing
            efforts.
          </div>
          <div className="pt-6">
            <button className="bg-[black] text-white p-3 rounded hover:bg-[#2699FB]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
