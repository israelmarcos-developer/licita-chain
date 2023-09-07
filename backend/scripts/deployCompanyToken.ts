import { ethers } from "hardhat";

async function main() {

  const factory = await ethers.deployContract("CompanyContract", ["345458743857"]);

  await factory.waitForDeployment();

  console.log(
    `Proposal Token Factory deployed to ${factory.target}`
  );

  process.env.COMPANY_CONTRACT_ADDRESS = factory.target.toString();
}

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });


