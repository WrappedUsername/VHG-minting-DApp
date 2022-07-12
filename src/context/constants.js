// Update address and scanLink when deployed to ethereum mainnet.
// Rinkeby testnet address
export const address = '0x011e800aBCaD80B42f2A6b0cEBAAbd55616B10A8';
export const scanLink = '';
export const discordLink = "https://discord.gg/RHxERTAANB";
export const githubLink = "https://github.com/WrappedUsername";
// contract abi, working. Update when deployed to ethereum mainnet
export const abi = [
  // solidity json abi
  {
    inputs: [],
    name: "_tokenIdCounter",
    outputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs:[],
    name:"price",
    outputs:[{"internalType":"uint256","name":"","type":"uint256"}],
    stateMutability:"view",
    type:"function"},
  // human-readable abi
  "function transferFrom(address from, address to, uint256 amount)",
  "function safeMint(address to)",
];