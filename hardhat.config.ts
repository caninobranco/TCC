import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: process.env.RPC_NODE,
      chainId: Number(process.env.CHAIN_ID),
      accounts: {
        mnemonic: process.env.SECRET
      }
    }
  }
};

export default config;
