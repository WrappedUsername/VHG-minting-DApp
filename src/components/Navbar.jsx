import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";
import { ethers } from "ethers";

// web3 provider, working!
const { ethereum } = window;
const provider = new ethers.providers.Web3Provider(ethereum);
const signer = provider.getSigner();

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

// navbar component
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  // ethereum wallet connect, this works
  const connectWallet = async () => {
    try {
      if (ethereum) {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        // get the address of the user
        const address = await signer.getAddress();
        // check if the user is already connected
        if (address === accounts[0]) {
          console.log("Already connected");
          return true;
        }
        // connect the user
        await signer.getAddress();
        console.log("Connected");
        return true;
      }
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };

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
          <button
            className="bg- eth-card py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#6ff2f0]"
            onClick={connectWallet}
          >
            Connect
          </button>
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
              <button
                className="bg- eth-card  py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#6ff2f0]"
                onClick={connectWallet}
              >
                Connect
              </button>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
