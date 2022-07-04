import React from "react";
import logo from "../../images/logo.png";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { discordLink, githubLink } from "../context/constants";
// import { Link, animateScroll, Scroll as scroll } from "react-scroll";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

// footer component
const Footer = () => {
  // WIP, react-scroll function
  /*
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  */
  // WIP, react-scroll html
  /* 
  <Link
  activeClass="active"
  to="mint"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
  ></Link>
*/

  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.75] justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="w-48 cursor-pointer scroll-smooth"
            // WIP, react-scroll to function
            // onClick={scrollToTop}
          />
        </div>

        <p className="text-white flex text-sm justify-center items-center text-gradient my-4">
          &copy; {new Date().getFullYear()} Voxel Helos Genesis. All Rights
          Reserved.
        </p>

        <ul className="text-white md:flex flex-[0.75] hidden text-lg justify-center items-center text-gradient-footer my-4">
          {["Mint", "About", "Road Map"].map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}
        </ul>

        <FaDiscord
          icon="FaDiscord"
          className="text-white md:flex flex-[0.15]  text-2xl justify-center items-center my-4 cursor-pointer"
          onClick={() => discordLink()} // WIP, error discordLink is not a function
        />

        <FaGithub
          icon="FaGithub"
          className="text-white md:flex flex-[0.15]  text-2xl justify-center items-center my-4 cursor-pointer"
          onClick={() => githubLink()} // WIP, error githubLink is not a function
        />
      </div>
    </div>
  );
};
export default Footer;
