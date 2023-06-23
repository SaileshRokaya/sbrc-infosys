import React from "react";
import logo from "../assets/img/sbrclogo.png";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-[50px] text-justify py-[50px]">
        <div>
          <div className="col-span-1 md:w-[100%] text-center">
            <img src={logo} alt="" />
          </div>
          <span className="text-white">
            SBRC Infosys is an leading software development company in Nepal. We
            create cost-effective solutions based on technical expertise to
            deliver the ultimate customer satisfaction. We provide quality
            service using cutting edge technology, clean design and user
            friendly interface.
          </span><br /><br />
        </div>
        <div className="text-white text-justify md:px-[120px] ">
          <h1 className="text-xl font-bold">Quick Links</h1>
          <p>________________</p><br/>
          <a href="" className="pt-[10px] hover:text-black">
            Home
          </a>
          <br />
          <a href="" className="hover:text-black">
            Company
          </a>
          <br />
          <a href="" className="hover:text-black">
            Resources
          </a>
          <a href="" className="hover:text-black">
            About
          </a>
          <br />
          <a href="" className="hover:text-black">
            Contact
          </a>
          <br />
          <a href="" className="hover:text-black">
            Privacy Policy
          </a><br /><br />
        </div>
        <div className="text-white">
          <div>
            <h1 className="text-xl font-bold">Connect With Us</h1>
            <p>________________________</p><br/>
            <a href="" className="pt-[10px] flex gap-2 hover:text-black">
              <BsFacebook className="text-white text-[20px]" /> Facebook
            </a>
            <a href="" className="pt-[10px] flex gap-2 hover:text-black">
              <AiFillYoutube className="text-white text-[20px]" /> YouTube
            </a>
            <a href="" className="pt-[10px] flex gap-2 hover:text-black">
              <AiOutlineInstagram className="text-white text-[20px]" /> Instagram
            </a>
            <a href="" className="pt-[10px] flex gap-2 hover:text-black">
              <AiFillLinkedin className="text-white text-[20px]" /> LinkedIn
            </a>
            <a href="" className="pt-[10px] flex gap-2 hover:text-black">
              <FaTiktok className="text-white text-[20px]" /> TikTok
            </a>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Footer;
