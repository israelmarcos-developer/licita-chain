/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ProposalTokenInterface,
  ProposalTokenInterfaceInterface,
} from "../../../../contracts/interfaces/ProposalTokenInterface.sol/ProposalTokenInterface";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "whoChanged",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "ValueChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "getInfo",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newValue",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ProposalTokenInterface__factory {
  static readonly abi = _abi;
  static createInterface(): ProposalTokenInterfaceInterface {
    return new Interface(_abi) as ProposalTokenInterfaceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ProposalTokenInterface {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ProposalTokenInterface;
  }
}
