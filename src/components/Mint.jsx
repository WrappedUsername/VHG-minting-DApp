import example from "../../images/example.gif";
import cabin from "../../images/cabin&helo.png";
import React from "react";
import { ethers } from "ethers";
import { fetch } from "node-fetch";
import { address, scanLink } from "../context/constants";
import { shortenAddress } from "../utils/shortenAddress";

// ethereum components
const { ethereum } = window;
const signer = provider.getSigner();
// obtain contract abi
// make an API call to the abi endpoint
const response = await fetch(
  "https://api.polygonscan.com/api?module=contract&action=getabi&address=0x1b692f5A01924A08772e4f10Be8992CACdeb45Cd&apikey=${process.env.POLYGONSCAN_API_KEY}"
);
const data = await response.json();

// print the JSON response
let abi = data.result;
console.log(abi);

// creating a new provider and passing in node URL
const node =
  "wss://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}";
const provider = new ethers.providers.WebSocketProvider(node);

// initiate contract instance
let contract = new ethers.Contract(address, abi, signer);

// mint component
const Mint = () => {
  // mint function
  const mintNFT = async () => {
    try {
      if (window.ethereum) {
        // mint the token
        const price = ethers.utils.parseEther("0.05", "ether");
        let write = await contract.safeMint(address, price);

        write.wait(2);
        // show the success message
        console.log("Minted");
        return true;
      }
    } catch (error) {
      console.log(error.message);
      return false;
    }
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
