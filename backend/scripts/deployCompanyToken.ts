import { ethers } from "hardhat";

async function main() {

  const company = await ethers.deployContract("CompanyContract", ["345458743857"]);

  await company.waitForDeployment();

  console.log(
    `Company Token deployed to ${company.target}`
  );
}

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });


