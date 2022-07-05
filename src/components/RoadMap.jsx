import React from "react";

// roadmap component
const RoadMap = () => (
  <div className="flex w-full justify-center items-center gradient-bg-roadmap">
    <div className="flex flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex flex-col border-l border-gray-100">
        <li className="mb-10 ml-4">
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Voxel Helos Genesis smart contract deployed to Polygon mainnet.
          </h3>
          <p
            className="mb-4 text-base font-normal break-words text-gray-500 dark:text-gray-400">
            Voxel Helos Genesis smart contract deployed to Polygon mainnet. I used REMIX IDE to 
            compile and deploy, but I ended up using VS Code and Hardhat to verify the smart contract.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Q3 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            VHG minting DApp deployed to IPFS. 
          </h3>
          <p className="text-base font-normal break-words text-gray-500 dark:text-gray-400">
           VHG minting DApp will be deployed using Unstoppable Domains as voxelhelosgenesis.nft and 
           will be pinned to IPFS and Pinata.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Q4 2022 - Q1 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            NFT staking smart contract for Voxel Helos Genesis HODLers.
          </h3>
          <p className="text-base font-normal break-words text-gray-500 dark:text-gray-400">
            I will create the NFT staking contract and update this DApp to include staking
            functions.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Q1 2023 - Q2 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            NFT staking rewards used to participate in Voxel Helos DAO
          </h3>
          <p className="text-base font-normal break-words text-gray-500 dark:text-gray-400">
            I will create the Voxel Helos DAO smart contract and all functions needed to use 
            the Voxel Helos DAO.
          </p>
        </li>
        <li className="ml-4">
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Beyond Q2 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Possible in game Voxel Helos assets.
          </h3>
          <p className="text-base font-normal break-words text-gray-500 dark:text-gray-400">
            If I can make Voxel Helos into in game assets I would think the best bet would be to airdrop
            these assets to whoever is HODLing Voxel Helos Genesis.
          </p>
        </li>
      </div>
    </div>
  </div>
);
export default RoadMap;
