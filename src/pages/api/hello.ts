// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { EventLog, Log, ethers } from 'ethers'
import { env } from 'process';
import { BiddingFactory__factory } from '../../../backend/typechain-types';
import { AlchemyProvider } from 'ethers';

type Data = {
  name: string
}

const myProvider = new ethers.AlchemyProvider("sepolia", env.ALCHEMY_HTTPS_KEY);

async function getValidBiddingContracts(contractAddress: string, provider: AlchemyProvider) {
  
  const contract = new ethers.Contract(contractAddress, BiddingFactory__factory.abi, provider);
  const filteredData = await contract.queryFilter(contract.filters.NewBiddingEmitted, 0, "latest");
  // const event = filteredData.filter((log) => log.args);
  // const logs = filteredData.map((log) => typeof log == typeof ethers.Log);
  // return {logs, events};
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const filteredData = await getValidBiddingContracts("0xDF8d5e27d4D0C9e5255717b290ed9630e89487D6", myProvider);
  console.log(filteredData);
  // logs.map((l) => console.log(l?.args));
  res.status(200).json({ name: 'John Doe' })
}
