import { ethers } from "hardhat";
import { Bidding, RealDigital } from "../typechain-types";

const { expect } = require("chai");

describe("Bidding", async () => {

    let BiddingContract: Bidding;

    before(async () => {
        const [govWallet] = await ethers.getSigners();
        const DrexContract = await ethers.deployContract("RealDigital", govWallet);
        BiddingContract = await ethers.deployContract("Bidding",
            [
                "Cadeiras Escolares",
                await DrexContract.getAddress()
            ],  
            govWallet);
    });

    it("Should validate bidding address", async () => {
        let contractAddress; 
        let biddingId;
        Promise.all([
            contractAddress = await BiddingContract.getAddress(),
            biddingId = await BiddingContract.getId()
        ]);
        
        expect(contractAddress).not.to.be.null;
        expect(biddingId).not.to.be.null;
    });
})