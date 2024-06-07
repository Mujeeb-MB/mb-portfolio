import React from "react";
import logo from "../assets/0000.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center ">
        <img className="mx-2 w-16 hover:cursor-pointer" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://drive.google.com/file/d/1C-qNIbSbxe1HTqJ4KwOCA4AX0V7q-CHw/view?usp=sharing"
          target="blank"
        >
          <button className="bg-amber-400 border-collapse rounded-full px-4 py-2 text-sm m-2 text-black hover:bg-neutral-400  hover:text-white">
            Resume
          </button>
        </a>

        <FaLinkedin className="hover:cursor-pointer hover:text-amber-300" />
        <FaGithub className="hover:cursor-pointer hover:text-amber-300" />
        <FaSquareXTwitter className="hover:cursor-pointer hover:text-amber-300" />
      </div>
    </nav>
  );
};

export default Navbar;
