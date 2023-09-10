import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat"
import { any } from "hardhat/internal/core/params/argumentTypes";

describe("Cover the whole golden path", function () {
    async function deployContractFixture() {

        const [drexOwner, companyTokenOwner, factoryOwner, governmentTokenOwner] = await ethers.getSigners();

        const BIDDING_CONTRACT_ADDRESS = "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81";
        const PROPOSAL_CONTRACT_ADDRESS = "0x75537828f2ce51be7289709686A69CbFDbB714F1"

        // DREX RELATED CODE

        const Drex = await ethers.getContractFactory("RealDigital");
        const drex = await Drex.deploy();
        await drex.mint(governmentTokenOwner.address, 100000);
        const drexAddress = drex.getAddress();

        // COMPANY RELATED CODE

        const randomCNPJ = "3244385348957";

        const CompanyToken = await ethers.getContractFactory("CompanyContract");
        const companyToken = await CompanyToken.connect(companyTokenOwner).deploy(randomCNPJ);
        const companyTokenAddress = companyToken.getAddress();


        const ProposalFactory = await ethers.getContractFactory("ProposalFactory");
        ProposalFactory.connect(factoryOwner);
        const proposalFactory = await ProposalFactory.deploy(drexAddress, companyTokenAddress);


        // GOVERNMENT RELATED CODE

        const GovernmentToken = await ethers.getContractFactory("GovToken");
        const governmentToken = await GovernmentToken.connect(governmentTokenOwner).deploy();
        const governmentTokenAddress = governmentToken.getAddress();

        const BiddingFactory = await ethers.getContractFactory("BiddingFactory");
        BiddingFactory.connect(governmentTokenOwner);
        const biddingFactory = await BiddingFactory.deploy(drexAddress, governmentTokenAddress);


        proposalFactory.on(proposalFactory.getEvent("ProposalTokenEmmitted"), (...args) => {
            console.log("\n\nNEW PROPOSAL CREATED: \n")
            console.log("The new proposal owner address is ", args[0], " and the address is ", args[1], "\n");
        })

        return { drexOwner, companyTokenOwner, factoryOwner, governmentTokenOwner, proposalFactory, biddingFactory, drex, BIDDING_CONTRACT_ADDRESS, PROPOSAL_CONTRACT_ADDRESS, companyToken };
    }

    it("Should deploy a new Bidding contract", async function () {
        const { drexOwner, companyTokenOwner, factoryOwner, governmentTokenOwner, proposalFactory, biddingFactory, drex, BIDDING_CONTRACT_ADDRESS, PROPOSAL_CONTRACT_ADDRESS, companyToken } = await loadFixture(deployContractFixture);
        const biddingContract = await ethers.getContractAt("Bidding", BIDDING_CONTRACT_ADDRESS);
        
        biddingFactory.on(biddingFactory.getEvent("NewBiddingEmitted"), (...args) => {
            console.log("\n\nNEW BIDDING CREATED: \n")
            console.log("The new bidding contract address is ", args[0], "the value is ", args[1], "and the creator was ", args[2], "\n");
        });

        biddingContract.on(biddingContract.getEvent("ProposalChosen"), (...args) => {
            console.log("\n\nNEW PROPOSAL CHOOSEN: \n")
            console.log("The new proposal winner address is ", args[0], "\n");
        });

        biddingContract.on(biddingContract.getEvent("PayBidding"), (...args) => {
            console.log("\n\n PROPOSAL PAID: \n")
            console.log("The amount transfered is to the winner is ", args[0], ", the proposal token is ", args[1], " and the proposal owner address is ", args[2], "\n");
        });
        
        biddingContract.on(biddingContract.getEvent("NewProposalRegistered"), (...args) => {
            console.log("\n\nNEW PROPOSAL ADDED TO LIST: \n")
            console.log("The new proposal owner address is ", args[0], " and the proposal address is ", args[1], "\n");
        });

        await drex.connect(governmentTokenOwner).increaseAllowance(await biddingFactory.getAddress(), 2000);
        await biddingFactory.connect(governmentTokenOwner).createBidding("Sample Bidding", 2000, "I will show it works");
        // Bidding created
        
        await proposalFactory.connect(companyTokenOwner).createProposalToken(100, "I will solve your issues", companyToken.getAddress());
        // Proposal created

        await biddingContract.connect(companyTokenOwner).addMemberToProposalAddresses(PROPOSAL_CONTRACT_ADDRESS);
        // Proposal Registered in Biddign contract

        await biddingContract.connect(governmentTokenOwner).chooseWinner(PROPOSAL_CONTRACT_ADDRESS);

        console.log("Now ", companyTokenOwner.address, " owns ", await drex.balanceOf(companyTokenOwner), " drex");

    })
});
