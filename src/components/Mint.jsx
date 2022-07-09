import example from "../../images/example.gif";
import cabin from "../../images/cabin&helo.png";
import React from "react";
import { ethers } from "ethers";
import { address, scanLink } from "../context/constants";
import { shortenAddress } from "../utils/shortenAddress";

// web3 provider, working!
const { ethereum } = window;
const provider = new ethers.providers.Web3Provider(ethereum);
const signer = provider.getSigner();

// contract abi, working now!
const abi = [
  // solidity json abi
  {
    inputs: [],
    name: "_tokenIdCounter",
    outputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  // human-readable abi
  "function safeMint(address to, uint256 _price)",
];



// get contract instance, working!
const VoxelHelosGenesis = new ethers.Contract(address, abi, signer);

// mint component
const Mint = () => {
  // _tokenIdCounter function
  // WIP, make this into current count/max supply display
  // const tokenIdCounter = await VoxelHelosGenesis._tokenIdCounter();
  // const count = ethers.utils.formatUnits(tokenIdCounter, 0);
  // console.log("minted:", count);

  // mint function, working!
  const mintNFT = async () => {

    const tokenIdCounter = await VoxelHelosGenesis._tokenIdCounter();
    const count = ethers.utils.formatUnits(tokenIdCounter, 0);
    // tested this log, its close needs work, this should be minted: 105, fixed!
    // was minted: 0.000000000000000105
    // update now its minted: 105
    console.log("minted:", count);

    

    // const price = '50000000000000000' wei
    
    
    // Error: value must be a string, fixed!
    // Error: invalid BigNumber value (argument="value", value={"value":"0.05"},
    // this should be 50000000000000000
    // was {value: '0.05'}, now it's {value: '50000000000000000'}, but
    // Error: invalid BigNumber value (argument="value", value={"value":"50000000000000000"},
    // fixed below _price
    

    // adding weth approve transaction, working
    const wethPolygonContract = new ethers.Contract('0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', 
    ['function approve(address spender, uint256 amount)', 
    'function transferFrom(address sender, address recipient, uint256 amount)'], signer);
    //const approveTx = await wethPolygonContract.approve("0x7ceb23fd6bc0add59e62ac25578270cff1b9f619", "50000000000000000");
    //await approveTx.wait();
    // const price = await VoxelHelosGenesis.price();
    
    // Works!
    const wethTx = await wethPolygonContract.transferFrom(
    "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    "0x3Bfa52b2d73Ce7a9a7A45Eb9Fe35c1d9199931dd", 
    "50000000000000000",
    { gasLimit: 3000000 });
    
    await wethTx.wait();

    const _price = ethers.utils.formatUnits(wethTx);
    console.log({ value: _price });

    await VoxelHelosGenesis.safeMint(
      
      signer.getAddress(),
      // fixed the BigNumber error, removed { value: _price }, now working!
      _price, 
      // this is working
      { gasLimit: 3000000 }, 
       
    );
    
    console.log("minted:", count);
  };

  return (
    <div className="flex w-full justify-center items-center gradient-bg-mint">
      <div className="flex flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className=" flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 ">
          <img src={cabin} alt="cabin" className="w-100" />
          <p className="text-3xl text-white break-words text-gradient">
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
              <a href={scanLink} className="text-white font-light ml-1 text-sm w-1/4">
                {shortenAddress(address)}
              </a>
              <p className="text-white font-semibold text-lg ml-1 mb-2 w-1/4">
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
