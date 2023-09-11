const ethers = require('ethers');
import { AlchemyProvider, EventLog } from "ethers";
import { env } from "process";
import { BiddingFactory__factory } from "../../typechain-types/factories/contracts/BiddingFactory__factory";
import { Bidding__factory } from "../../typechain-types/factories/contracts";


export const myProvider = new ethers.AlchemyProvider("sepolia", env.ALCHEMY_HTTPS_KEY);
console.log(myProvider)
type biddingDetails = {
    hash: string,
    id: string, 
    title: string, 
    deployTime: string, 
    proposal: string, 
    choosenProposal: string,
    biddingPayableTokenAddress: string,
    state: string
  }


export async function getValidBiddingContracts(contractAddress: string, provider: AlchemyProvider): Promise<biddingDetails[]> {

    const contract = new ethers.Contract(contractAddress, BiddingFactory__factory.abi, provider);
    const filteredData = await contract.queryFilter(contract.filters.NewBiddingEmitted, 0, "latest");
    const eventLogs = filteredData as EventLog[];
  
    const biddingList = eventLogs.map((eventLog) => new ethers.Contract(
      eventLog.args[0],
      Bidding__factory.abi,
      provider
    ));
  
    let response: biddingDetails[] = [];
    for(const bidding of biddingList) {
      const biddingDetails = await bidding.getDetails();
      response.push({
        hash: await bidding.getAddress(),
        id: biddingDetails[0],
        title: biddingDetails[1],
        deployTime: biddingDetails[2],
        proposal: biddingDetails[3],
        choosenProposal: biddingDetails[4],
        biddingPayableTokenAddress: biddingDetails[5],
        state: biddingDetails[6]
      });
    }
    return response;
  }