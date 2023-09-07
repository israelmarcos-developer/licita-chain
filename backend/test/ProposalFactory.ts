import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat"

describe("Proposal Factory", function () {
    async function deployContractFixture () {

        const randomCNPJ = "3244385348957";

        const [companyTokenOwner, factoryOwner, rand] = await ethers.getSigners();

        const CompanyToken = await ethers.getContractFactory("CompanyContract");
        CompanyToken.connect(companyTokenOwner);
        const companyToken = await CompanyToken.deploy(randomCNPJ);

        
        const ProposalFactory = await ethers.getContractFactory("ProposalFactory");
        ProposalFactory.connect(factoryOwner);
        const proposalFactory = await ProposalFactory.deploy();

        // var newProposalAddress: string = "";

        proposalFactory.on(proposalFactory.getEvent("ProposalTokenEmmitted"), (setter, ProposalTokenEmmited, event) => {
            console.log("The new contract address is ", ProposalTokenEmmited);
        })

        return { proposalFactory, companyToken, companyTokenOwner, rand};
    }
    
    it("It should emmit a Prposal Token Emmited event", async function() {
        const { proposalFactory, companyToken, companyTokenOwner } = await loadFixture(deployContractFixture);

        let newProposalAddress: string = "";

        proposalFactory.on(proposalFactory.getEvent("ProposalTokenEmmitted"), (setter, ProposalTokenEmmited, event) => {
            newProposalAddress = ProposalTokenEmmited
            console.log("The new contract address is ", ProposalTokenEmmited);
        })

        expect(
            await proposalFactory.createProposalToken(22, "João vai fornecer doces", companyToken.target)
        ).to.emit(proposalFactory, "ProposalTokenEmmitted")
        .withArgs(companyTokenOwner, newProposalAddress);
    })

    it("It should not emmit a Prposal Token Emmited event", async function() {
        const { proposalFactory, companyToken, rand } = await loadFixture(deployContractFixture);

        proposalFactory.connect(rand);

        expect(
            await proposalFactory.createProposalToken(22, "João vai fornecer doces", companyToken)
        ).to.emit(proposalFactory, "ProposalTokenEmmitted");
    })
})