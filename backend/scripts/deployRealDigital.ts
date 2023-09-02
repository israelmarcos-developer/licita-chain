import { ethers } from "hardhat";

async function main() {

  const realDigital = await ethers.deployContract("RealDigital");

  await realDigital.waitForDeployment();

  console.log(
    `Proposal Token realDigital deployed to ${realDigital.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
