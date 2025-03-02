require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.21",
  networks: {
    hardhat: {}, // Local Hardhat Network
    localhost: {
      url: "http://127.0.0.1:8545" // Hardhat network
    }
  }
};
