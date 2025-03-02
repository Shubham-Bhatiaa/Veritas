const hre = require("hardhat");

async function main() {
  const MessageStore = await hre.ethers.getContractFactory("MessageStore");
  const messageStore = await MessageStore.deploy("Hello, Blockchain!"); // Initial message

  await messageStore.waitForDeployment(); // Wait for deployment

  console.log(`MessageStore deployed to: ${messageStore.target}`); // Use .target for address
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
