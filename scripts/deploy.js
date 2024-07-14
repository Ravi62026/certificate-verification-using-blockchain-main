
const hre = require("hardhat");

async function main() {

  const Verification= await hre.ethers.getContractFactory("Verification");
  const verification = await Verification.deploy();
  await verification.deployed();

  console.log(
    `Verification Smart Contract deployed to ${verification.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
