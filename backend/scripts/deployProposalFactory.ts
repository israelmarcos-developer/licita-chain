import { ethers } from "hardhat";

async function main() {

  const factory = await ethers.deployContract("ProposalFactory");

  await factory.waitForDeployment();

  console.log(
    `Proposal Token Factory deployed to ${factory.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
