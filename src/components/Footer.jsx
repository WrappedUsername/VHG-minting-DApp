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

        <a
          href={discordLink} // Working!
          className="text-white md:flex flex-[0.10] text-2xl justify-center items-center my-4 cursor-pointer"
        >
          <FaDiscord icon="FaDiscord" />
        </a>

        <a
          href={githubLink} // Working!
          className="text-white md:flex flex-[0.20] text-2xl justify-center items-center my-4 cursor-pointer"
        >
          <FaGithub icon="FaGithub" />
        </a>

        <a
          href="https://opensea.io/collection/voxel-helos-genesis" // Working! Could use some more work.
          className="text-white text-xs md:flex flex-[0.15] justify-center items-center my-4 cursor-pointer"
        >
          <img // I am not sure I can change the badge to make it look the way I want, WIP? 
            src="https://storage.googleapis.com/opensea-static/Logomark/Badge%20-%20Available%20On%20-%20BW.png"
            alt="Available on OpenSea"
          />
        </a>
      </div>
    </div>
  );
};
export default Footer;
