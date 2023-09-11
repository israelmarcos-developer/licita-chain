import { ethers } from "hardhat";

async function main() {

  const govToken = await ethers.deployContract("GovToken");

  await govToken.waitForDeployment();

  console.log(
    `Gov Token deployed to ${govToken.target}`
  );
}

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });