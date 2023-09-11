//import { ethers } from 'ethers'
//import { BiddingFactory__factory  } from '../../../contracts/BiddingFactory__factory';
//import { env } from 'process';
//
//
//
//export const myProvider = new ethers.AlchemyProvider("sepolia", env.ALCHEMY_HTTPS_KEY);
//
//export type biddingDetails = {
//    hash: string,
//    id: string, 
//    title: string, 
//    deployTime: string, 
//    proposal: string, 
//    choosenProposal: string,
//    biddingPayableTokenAddress: string,
//    state: string
//  }
//
//
//export default async function createBidding(biddingDetails: any, address: string) {
//    // Crie uma nova instância da carteira
//    let wallet
//    if (address !== null) {
//        wallet = new ethers.JsonRpcSigner(myProvider, address);
//    } else {
//      console.log('Verifique o Services, endereço nao encontrado')
//    }
//    
//    // Crie uma nova instância do contrato
//    const contract = await BiddingFactory__factory.connect('0x371E7fc4E2F1E32309F054b4c4182256acf3aa68', wallet);
//
//    const tx = await contract.connect(wallet).createBidding(
//    biddingDetails.id,
//    biddingDetails.title,
//    biddingDetails.deployTime,
//    biddingDetails.proposal,
//    biddingDetails.choosenProposal,
//    biddingDetails.biddingPayableTokenAddress,
//    biddingDetails.state
//  );
//
//  // Aguarde a transação ser minerada
//  const receipt = await tx.wait();
//
//  return receipt;
//}
//
//// Exemplo de uso da função createBidding
//const details = {
//    hash: 'Hash Value',
//    id: '1',
//    title: 'Bidding Title',
//    deployTime: 'Deploy Time',
//    proposal: 'Proposal',
//    choosenProposal: 'Choosen Proposal',
//    biddingPayableTokenAddress: 'Token Address',
//    state: 'State'
//  }
//  
//  //createBidding(details).then(receipt => {
//  //  console.log(receipt);
//  //}).catch(error => {
//  //  console.error(error);
//  //});