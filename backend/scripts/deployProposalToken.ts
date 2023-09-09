import { ethers } from "hardhat";

async function main() {

  const proposal = await ethers.deployContract("ProposalToken");

  await proposal.waitForDeployment();

  console.log(
    `Proposal Token deployed to ${proposal.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
