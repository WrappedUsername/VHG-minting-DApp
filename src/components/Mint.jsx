import example from "../../images/example.gif";
import cabin from "../../images/cabin&helo.png";
import React from "react";
// web3.js, WIP
import { address, VoxelHelosGenesis, scanLink } from "../context/constants";
import { shortenAddress } from "../utils/shortenAddress";

// ethereum components
const { ethereum } = window;
// web3 provider, WIP

const signer = provider.getSigner();

// mint component
const Mint = () => {
  // mint function, not working, WIP
  const mintNFT = async () => {
    // initiate contract instance, WIP

    // mint the token, WIP
    // const price = .utils.("0.05", "ether"); // change to web3.js utils, WIP
    // await contract.safeMint(); // needs work, WIP

    // show the success message
    console.log("Minted");
    return true;
  };

  return (
    <div className="flex w-full justify-center items-center gradient-bg-mint">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className=" flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 ">
          <img src={cabin} alt="cabin" className="w-100" />
          <p className="text-3xl text-white break-words text-gradient">
            {" "}
            Voxel Helos Genesis, cabin and fuselage layers added to the
            background layer to complete the NFT.
          </p>
        </div>
        <div className=" flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 ">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-64 sm:w-80 w-full my-5 eth-card .white-glassmorphism  ">
            <div className="flex justify-between flex-col w-full h-full ">
              <div className="flex justify-between items-start">
                <button
                  type="button "
                  className="flex flex-row justify-center items-center mt-1 bg-[eth-card] p-3 rounded-full cursor-pointer hover:shadow-inner shadow-[#4dfad7] shadow-lg "
                  onClick={mintNFT}
                >
                  <p className="text-white text-base font-semibold">Mint</p>
                </button>

                <img
                  src={example}
                  alt="example"
                  className="w-48 mr-1 rounded-xl shadow-[#4dfad7] shadow-lg"
                />
              </div>
              <a href={scanLink} className="text-white font-light ml-1 text-sm">
                {shortenAddress(address)}
              </a>
              <p className="text-white font-semibold text-lg ml-1 mb-1">
                Polygon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
