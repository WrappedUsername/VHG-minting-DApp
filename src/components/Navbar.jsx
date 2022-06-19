import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

// navbar component
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="flex relative">
      <div className="z-100 fixed top-0 w-screen flex md:justify-center justify-between items-center p-4 gradient-bg-navbar">
        <div className="md:flex-[0.75] flex-initial justify-center items-center">
          <img src={logo} alt="logo" className="w-96 cursor-pointer" />
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {["Mint", "About", "Road Map"].map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}
          <li className="bg- eth-card py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#6ff2f0]">
            Connect
          </li>
        </ul>

        <div className="flex relative">
          {!toggleMenu && (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {["Mint", "About", "Road Map"].map((item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg"
                />
              ))}
              <li className="bg- eth-card  py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#6ff2f0]">
                Connect
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
