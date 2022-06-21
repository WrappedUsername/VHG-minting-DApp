import ContractAbi from './VoxelHelosGenesis.json';

export const address = '0x1b692f5A01924A08772e4f10Be8992CACdeb45Cd';
export const scanLink = 'https://polygonscan.com/address/0x1b692f5a01924a08772e4f10be8992cacdeb45cd';
export const VoxelHelosGenesis = ContractAbi;
export const network = {
    polygon: {
        name: "polygon",
        chainId: "137",
        rpcUrl: "https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}"
    }
}