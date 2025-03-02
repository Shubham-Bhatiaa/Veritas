const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const ProductReviews = await hre.ethers.getContractFactory("ProductReviews");

  // Deploy the contract
  const productReviews = await ProductReviews.deploy();

  // Wait for the contract to be deployed
  await productReviews.waitForDeployment();

  // Log the contract address
  console.log("ProductReviews deployed to:", productReviews.target);
}

// Run the deploy script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


//   const hre = require("hardhat");

//   async function main() {
//     const MessageStore = await hre.ethers.getContractFactory("MessageStore");
//     const messageStore = await MessageStore.deploy("Hello, Blockchain!"); // Initial message

//     await messageStore.waitForDeployment(); // Wait for deployment

//     console.log(`MessageStore deployed to: ${messageStore.target}`); // Use .target for address
//   }

//   main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//       console.error(error);
//       process.exit(1);
//     });
