// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { EventLog, ethers, AlchemyProvider } from 'ethers'
import { env } from 'process';
import { BiddingFactory__factory, Bidding__factory, ProposalToken__factory } from '../../../contracts';

export const myProvider = new ethers.AlchemyProvider("sepolia", env.ALCHEMY_HTTPS_KEY);

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

export async function getProposals(contractAddress: string, provider: AlchemyProvider): Promise<string[]> {
  const contract = new ethers.Contract(contractAddress, Bidding__factory.abi, provider);
  const filteredData = await contract.queryFilter(contract.filters.NewProposalRegistered, 0, "latest");
  const eventLogs = filteredData as EventLog[];

  const proposalList = eventLogs.map((eventLog) => new ethers.Contract(
    eventLog.args[0],
    ProposalToken__factory.abi,
    provider
  ));

  console.log(eventLogs);
  
  // let response: proposalDetails[] = [];
  // for(const bidding of biddingList) {
  //   const biddingDetails = await bidding.getDetails();
  //   response.push({
  //     hash: await bidding.getAddress(),
  //     id: biddingDetails[0],
  //     title: biddingDetails[1],
  //     deployTime: biddingDetails[2],
  //     proposal: biddingDetails[3],
  //     choosenProposal: biddingDetails[4],
  //     biddingPayableTokenAddress: biddingDetails[5],
  //     state: biddingDetails[6]
  //   });
  // }

  return [];
}

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

type proposalDetails = {
  hash: string,
  id: string, 
  title: string, 
  deployTime: string, 
  proposal: string, 
  choosenProposal: string,
  biddingPayableTokenAddress: string,
  state: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<biddingDetails[]>
) {
    const filteredData = await getValidBiddingContracts("0x371E7fc4E2F1E32309F054b4c4182256acf3aa68", myProvider);
    res.status(200).json(filteredData);
}