import { ethers } from "hardhat";
import { Bidding, BiddingFactory, GovToken, RealDigital } from "../typechain-types";
const { expect } = require("chai");

describe("BiddingFactory", async () => {

    let BiddingFactoryContract: BiddingFactory;
    let DrexContract: RealDigital;
    let GovToken: GovToken;
    const biddingPriceExpected = ethers.parseEther("1000");

    before(async () => {
        const [govWallet] = await ethers.getSigners();

        GovToken = await ethers.deployContract("GovToken", govWallet);
        DrexContract = await ethers.deployContract("RealDigital", govWallet);
        const mintTx = await DrexContract.mint(govWallet.address, ethers.parseEther("10000"));
        await mintTx.wait();

        BiddingFactoryContract = await ethers.deployContract(
            "BiddingFactory", 
            [
                await DrexContract.getAddress(),
                await GovToken.getAddress()
            ], 
            govWallet);
        
        await DrexContract.approve(await BiddingFactoryContract.getAddress(), biddingPriceExpected, {'from': govWallet.address});
    });

    it("Should mint new bidding with factory", async () => {
        const tx = await BiddingFactoryContract.createBidding.call(
            "Bidding", 
            "Compra de cadeiras escolares", 
            ethers.parseEther("1000"), 
            "As escolas municipais de São Paulo precisam de novas cadeiras"
        );
        await tx.wait();

        const txReceipt = await ethers.provider.getTransactionReceipt(tx.hash);
        const logs = txReceipt?.logs
            .map((log) => 
                BiddingFactoryContract
                    .interface
                    .parseLog({data: log.data, topics: [...log.topics]}))
            .filter((l) => l?.name === "createNewBidding");
        
        const biddingAddress = logs?.[0]?.args[0];
        const biddingContract = await ethers.getContractAt("Bidding", biddingAddress);

        const biddingPrice = await biddingContract.getBiddingPrice();

        expect(biddingPrice).to.equal(biddingPriceExpected);
    });

    it("Should create invalid contract", async () => {
        const [govWallet, secondWallet] = await ethers.getSigners();
        const BiddingContract = await ethers.deployContract(
            "Bidding", 
            [
                "Compra de cadeiras escolares", 
                await DrexContract.getAddress(),
                "As escolas municipais de São Paulo precisam de novas cadeiras"
            ],
            secondWallet
        );

        const fakeBiddingAddress = await BiddingContract.getAddress();
        
        const logs = await BiddingFactoryContract.queryFilter(BiddingFactoryContract.filters.createNewBidding, 0, "latest");
        const validContract = logs.filter((l) => l?.args[0] === fakeBiddingAddress);

        expect(validContract.length).to.equal(0);
    });
})