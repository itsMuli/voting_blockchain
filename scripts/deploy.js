require('dotenv').config();
const { ethers } = require("ethers");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.API_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  console.log("Deploying Voting contract with the account:", wallet.address);

  const Voting = await ethers.ContractFactory("Voting");
  const votingContract = await Voting.connect(wallet).deploy(); // Deploy using the wallet

  console.log("Voting contract deployed to address:", votingContract.address);
  console.log("Transaction hash:", votingContract.deployTransaction.hash);

  // Wait for the transaction to be mined
  await votingContract.deployed();

  console.log("Voting contract deployed successfully!");

  // Save the deployed contract address to .env for future use
  // Remember to handle securely in a real application
  const fs = require('fs');
  fs.writeFileSync('.env', `CONTRACT_ADDRESS=${votingContract.address}\n`, { flag: 'a' });
}

main().catch((error) => {
  console.error("Error deploying contract:", error);
  process.exitCode = 1;
});
