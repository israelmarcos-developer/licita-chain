import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat"

describe("Company Token", function () {
    async function deployContractFixture () {

        const randomCNPJ = "3244385348957";

        const [owner] = await ethers.getSigners();

        const CompanyToken = await ethers.getContractFactory("CompanyContract");
        const companyToken = await CompanyToken.deploy(randomCNPJ);

        return { owner, companyToken, randomCNPJ };
    }

    it("Should return a valid CNPJ", async function() {
        const {owner, companyToken, randomCNPJ} = await loadFixture(deployContractFixture);

        expect(await companyToken.getCNPJ(owner)).to.equal(randomCNPJ);
    })
})