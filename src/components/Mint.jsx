import example from "../../images/example.gif";
import cabin from "../../images/cabin&helo.png";
import React from "react";
import { ethers } from "ethers";
import { address, abi,  scanLink } from "../context/constants";
import { shortenAddress } from "../utils/shortenAddress";

// web3 provider, working.
const { ethereum } = window;
const provider = new ethers.providers.Web3Provider(ethereum);
const signer = provider.getSigner();

// get contract instance, working.
const VoxelHelos = new ethers.Contract(address, abi, signer);

// mint component
const Mint = () => {
  // _tokenIdCounter function
  // WIP, make this into current count/max supply display
  // const tokenIdCounter = await VoxelHelosGenesis._tokenIdCounter();
  // const count = ethers.utils.formatUnits(tokenIdCounter, 0);
  // console.log("minted:", count);

  // mint function, working!
  const mintNFT = async () => {
    const tokenIdCounter = await VoxelHelos._tokenIdCounter();
    const count = ethers.utils.formatUnits(tokenIdCounter, 0);
    // tested this log, its close needs work, this should be minted: 105, fixed!
    // was minted: 0.000000000000000105
    // update now its minted: 105
    console.log("minted:", count);

    // gets WETH into MetaMask, but wait not working
    const WETH = new ethers.Contract('0xc778417E063141139Fce010982780140Aa0cD5Ab', 
    ['function approve(address spender, uint256 amount)', 
    'function transferFrom(address sender, address recipient, uint256 amount)'], signer);
    const price = ethers.utils.formatUnits("50000000000000000", 0); 
    const wethTx = WETH.transferFrom('0xc778417E063141139Fce010982780140Aa0cD5Ab', 
    "0x011e800aBCaD80B42f2A6b0cEBAAbd55616B10A8", price,
    { gasLimit: 3000000 });
    // not working
    await wethTx.wait();
    
    await VoxelHelos.safeMint(
      signer.getAddress(),
      // this is working
      { gasLimit: 3000000 }
    );
    console.log("minted:", count);
  };

    // Worked for Polygon, WETH in mint function,
    /*
    const wethPolygonContract = new ethers.Contract('0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', 
    ['function approve(address spender, uint256 amount)', 
    'function transferFrom(address sender, address recipient, uint256 amount)'], signer);
    const price = ethers.utils.formatUnits("50000000000000000", 0);
    const wethTx = await wethPolygonContract.transferFrom(
    "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    "NFT contract address", 
    price,
    { gasLimit: 3000000 });
    await wethTx.wait();
    console.log({ value: price });
    await VoxelHelosGenesis.safeMint(
      signer.getAddress(), 
      { gasLimit: 3000000 }, 
    );
    console.log("minted:", count);
    };
    */
    // ethereum mainnet
    /*
    const wethContract = new ethers.Contract('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 
    ['function approve(address spender, uint256 amount)', 
    'function transferFrom(address sender, address recipient, uint256 amount)'], signer);
    */
    /*
    // ethereum rinkeby testnet
    const wethContract = new ethers.Contract('0xc778417E063141139Fce010982780140Aa0cD5Ab', 
    ['function approve(address spender, uint256 amount)', 
    'function transferFrom(address sender, address recipient, uint256 amount)'], signer);
      */

  return (
    <div className="flex w-full justify-center items-center gradient-bg-mint">
      <div className="flex flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className=" flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 ">
          <img src={cabin} alt="cabin" className="w-100" />
          <p className="text-3xl text-white break-words text-gradient">
            Voxel Helos, cabin and fuselage layers added to the
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
              <a
                href={scanLink}
                className="text-white font-light ml-1 text-sm w-1/4"
              >
                {shortenAddress(address)}
              </a>
              <p className="text-white font-semibold text-lg ml-1 mb-2 w-1/4">
                ethereum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
