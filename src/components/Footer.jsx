import React from "react";
import logo from "../../images/logo.png";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { discordLink, githubLink } from "../context/constants";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

// footer component
const Footer = () => {
  
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.75] justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="w-48 cursor-pointer scroll-smooth"
            // WIP
            // onClick={scrollToTop}
          />
        </div>

        <p className="text-white flex text-sm justify-center items-center text-gradient my-4">
          &copy; {new Date().getFullYear()} Voxel Helos. All rights
          reserved.
        </p>

        <ul className="text-white md:flex flex-[0.75] hidden text-lg justify-center items-center text-gradient-footer my-4">
          {["Mint", "About", "Road Map"].map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}
        </ul>

        <a
          href={discordLink} // Working
          className="text-white md:flex flex-[0.10] text-2xl justify-center items-center my-4 cursor-pointer"
        >
          <FaDiscord icon="FaDiscord" />
        </a>

        <a
          href={githubLink} // Working
          className="text-white md:flex flex-[0.20] text-2xl justify-center items-center my-4 cursor-pointer"
        >
          <FaGithub icon="FaGithub" />
        </a>

        <a // Update this when deployed to ethereum mainnet.
          href="" // Working.
          // size does not change when md:text-sm applied or removed, very large on small screens :(
          className="md:flex flex-[0.15] justify-center items-center my-4 cursor-pointer"
        >
          <img // I am not sure I can change the badge to make the size I want. 
            src="https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(light).svg"
            alt="Available on OpenSea"
            // This fixed the size issues described above.
            className="w-32"
          />
        </a>
      </div>
    </div>
  );
};
export default Footer;
