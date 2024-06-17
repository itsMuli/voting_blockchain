// hardhat.config.js

require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

module.exports = {
  solidity: "0.8.11",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/ff0388ac417c4f70b5aa0742a0f7208b",
      accounts: []
    }
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}

