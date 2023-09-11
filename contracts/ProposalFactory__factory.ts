/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  ProposalFactory,
  ProposalFactoryInterface,
} from "../../contracts/ProposalFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_drexTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_companyTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newContract",
        type: "address",
      },
    ],
    name: "ProposalTokenEmmitted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proposalValue",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_info",
        type: "string",
      },
      {
        internalType: "address",
        name: "_companyContractAddress",
        type: "address",
      },
    ],
    name: "createProposalToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002741380380620027418339818101604052810190620000379190620002a3565b6200004c6000801b33620000d660201b60201c565b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620002ea565b620000e88282620001c760201b60201c565b620001c357600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001686200023160201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200026b826200023e565b9050919050565b6200027d816200025e565b81146200028957600080fd5b50565b6000815190506200029d8162000272565b92915050565b60008060408385031215620002bd57620002bc62000239565b5b6000620002cd858286016200028c565b9250506020620002e0858286016200028c565b9150509250929050565b61244780620002fa6000396000f3fe60806040523480156200001157600080fd5b5060043610620000945760003560e01c806336568abe116200006357806336568abe146200014557806391d148541462000165578063a217fddf146200019b578063d547741f14620001bd5762000094565b806301ffc9a714620000995780630708262e14620000cf578063248a9ca314620000ef5780632f2ff15d1462000125575b600080fd5b620000b76004803603810190620000b1919062000bf9565b620001dd565b604051620000c6919062000c48565b60405180910390f35b620000ed6004803603810190620000e7919062000e67565b6200025a565b005b6200010d600480360381019062000107919062000f1d565b620004a3565b6040516200011c919062000f60565b60405180910390f35b6200014360048036038101906200013d919062000f7d565b620004c2565b005b6200016360048036038101906200015d919062000f7d565b620004e9565b005b6200018360048036038101906200017d919062000f7d565b62000573565b60405162000192919062000c48565b60405180910390f35b620001a5620005dd565b604051620001b4919062000f60565b60405180910390f35b620001db6004803603810190620001d5919062000f7d565b620005e4565b005b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148062000253575062000252826200060b565b5b9050919050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401620002b9919062000fd5565b602060405180830381865afa158015620002d7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002fd919062001009565b1162000340576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200033790620010c2565b60405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231326040518263ffffffff1660e01b81526004016200037d919062000fd5565b602060405180830381865afa1580156200039b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003c1919062001009565b1162000404576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003fb906200115a565b60405180910390fd5b60008383604051620004169062000b7a565b6200042392919062001205565b604051809103906000f08015801562000440573d6000803e3d6000fd5b5090508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f6292306542bdf2af71599ed778f88c83f0305a9b43b03a12b877494b20c84d2260405160405180910390a350505050565b6000806000838152602001908152602001600020600101549050919050565b620004cd82620004a3565b620004d88162000675565b620004e483836200068d565b505050565b620004f362000772565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462000563576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200055a90620012af565b60405180910390fd5b6200056f82826200077a565b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b620005ef82620004a3565b620005fa8162000675565b6200060683836200077a565b505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6200068a816200068462000772565b62000860565b50565b62000699828262000573565b6200076e57600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506200071362000772565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600033905090565b62000786828262000573565b156200085c57600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506200080162000772565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b6200086c828262000573565b620008ec576200087c81620008f0565b6200088c8360001c60206200091f565b6040516020016200089f929190620013b3565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620008e39190620013f5565b60405180910390fd5b5050565b6060620009188273ffffffffffffffffffffffffffffffffffffffff16601460ff166200091f565b9050919050565b60606000600283600262000934919062001448565b62000940919062001493565b67ffffffffffffffff8111156200095c576200095b62000cbb565b5b6040519080825280601f01601f1916602001820160405280156200098f5781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110620009ca57620009c9620014ce565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811062000a315762000a30620014ce565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000600184600262000a73919062001448565b62000a7f919062001493565b90505b600181111562000b29577f3031323334353637383961626364656600000000000000000000000000000000600f86166010811062000ac55762000ac4620014ce565b5b1a60f81b82828151811062000adf5762000ade620014ce565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c94508062000b2190620014fd565b905062000a82565b506000841462000b70576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000b67906200157b565b60405180910390fd5b8091505092915050565b610e74806200159e83390190565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b62000bd38162000b9c565b811462000bdf57600080fd5b50565b60008135905062000bf38162000bc8565b92915050565b60006020828403121562000c125762000c1162000b92565b5b600062000c228482850162000be2565b91505092915050565b60008115159050919050565b62000c428162000c2b565b82525050565b600060208201905062000c5f600083018462000c37565b92915050565b6000819050919050565b62000c7a8162000c65565b811462000c8657600080fd5b50565b60008135905062000c9a8162000c6f565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000cf58262000caa565b810181811067ffffffffffffffff8211171562000d175762000d1662000cbb565b5b80604052505050565b600062000d2c62000b88565b905062000d3a828262000cea565b919050565b600067ffffffffffffffff82111562000d5d5762000d5c62000cbb565b5b62000d688262000caa565b9050602081019050919050565b82818337600083830152505050565b600062000d9b62000d958462000d3f565b62000d20565b90508281526020810184848401111562000dba5762000db962000ca5565b5b62000dc784828562000d75565b509392505050565b600082601f83011262000de75762000de662000ca0565b5b813562000df984826020860162000d84565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000e2f8262000e02565b9050919050565b62000e418162000e22565b811462000e4d57600080fd5b50565b60008135905062000e618162000e36565b92915050565b60008060006060848603121562000e835762000e8262000b92565b5b600062000e938682870162000c89565b935050602084013567ffffffffffffffff81111562000eb75762000eb662000b97565b5b62000ec58682870162000dcf565b925050604062000ed88682870162000e50565b9150509250925092565b6000819050919050565b62000ef78162000ee2565b811462000f0357600080fd5b50565b60008135905062000f178162000eec565b92915050565b60006020828403121562000f365762000f3562000b92565b5b600062000f468482850162000f06565b91505092915050565b62000f5a8162000ee2565b82525050565b600060208201905062000f77600083018462000f4f565b92915050565b6000806040838503121562000f975762000f9662000b92565b5b600062000fa78582860162000f06565b925050602062000fba8582860162000e50565b9150509250929050565b62000fcf8162000e22565b82525050565b600060208201905062000fec600083018462000fc4565b92915050565b600081519050620010038162000c6f565b92915050565b60006020828403121562001022576200102162000b92565b5b6000620010328482850162000ff2565b91505092915050565b600082825260208201905092915050565b7f596f752063616e6e6f742075736520746869732066756e6374696f6e2062656360008201527f6175736520796f7520646f6e2774206f776e206120636f6d70616e7900000000602082015250565b6000620010aa603c836200103b565b9150620010b7826200104c565b604082019050919050565b60006020820190508181036000830152620010dd816200109b565b9050919050565b7f546865726520617265206e6f20636f6d70616e7920746f6b656e7320696e207960008201527f6f75722077616c6c657400000000000000000000000000000000000000000000602082015250565b600062001142602a836200103b565b91506200114f82620010e4565b604082019050919050565b60006020820190508181036000830152620011758162001133565b9050919050565b620011878162000c65565b82525050565b600081519050919050565b60005b83811015620011b85780820151818401526020810190506200119b565b60008484015250505050565b6000620011d1826200118d565b620011dd81856200103b565b9350620011ef81856020860162001198565b620011fa8162000caa565b840191505092915050565b60006040820190506200121c60008301856200117c565b8181036020830152620012308184620011c4565b90509392505050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b600062001297602f836200103b565b9150620012a48262001239565b604082019050919050565b60006020820190508181036000830152620012ca8162001288565b9050919050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b600062001314601783620012d1565b91506200132182620012dc565b601782019050919050565b600062001339826200118d565b620013458185620012d1565b93506200135781856020860162001198565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b60006200139b601183620012d1565b9150620013a88262001363565b601182019050919050565b6000620013c08262001305565b9150620013ce82856200132c565b9150620013db826200138c565b9150620013e982846200132c565b91508190509392505050565b60006020820190508181036000830152620014118184620011c4565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620014558262000c65565b9150620014628362000c65565b9250828202620014728162000c65565b915082820484148315176200148c576200148b62001419565b5b5092915050565b6000620014a08262000c65565b9150620014ad8362000c65565b9250828201905080821115620014c857620014c762001419565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006200150a8262000c65565b91506000820362001520576200151f62001419565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b6000620015636020836200103b565b915062001570826200152b565b602082019050919050565b60006020820190508181036000830152620015968162001554565b905091905056fe60806040523480156200001157600080fd5b5060405162000e7438038062000e7483398181016040528101906200003791906200036f565b8160018190555080600290816200004f919062000616565b5032600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000c27f2f2949ab00000000000000000000000000000000000000000000000000000000620000ca60201b60201c565b505062000780565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19160362000135576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200012c906200075e565b60405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b620001ca81620001b5565b8114620001d657600080fd5b50565b600081519050620001ea81620001bf565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200024582620001fa565b810181811067ffffffffffffffff821117156200026757620002666200020b565b5b80604052505050565b60006200027c620001a1565b90506200028a82826200023a565b919050565b600067ffffffffffffffff821115620002ad57620002ac6200020b565b5b620002b882620001fa565b9050602081019050919050565b60005b83811015620002e5578082015181840152602081019050620002c8565b60008484015250505050565b60006200030862000302846200028f565b62000270565b905082815260208101848484011115620003275762000326620001f5565b5b62000334848285620002c5565b509392505050565b600082601f830112620003545762000353620001f0565b5b815162000366848260208601620002f1565b91505092915050565b60008060408385031215620003895762000388620001ab565b5b60006200039985828601620001d9565b925050602083015167ffffffffffffffff811115620003bd57620003bc620001b0565b5b620003cb858286016200033c565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200042857607f821691505b6020821081036200043e576200043d620003e0565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004a87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000469565b620004b4868362000469565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620004f7620004f1620004eb84620001b5565b620004cc565b620001b5565b9050919050565b6000819050919050565b6200051383620004d6565b6200052b6200052282620004fe565b84845462000476565b825550505050565b600090565b6200054262000533565b6200054f81848462000508565b505050565b5b8181101562000577576200056b60008262000538565b60018101905062000555565b5050565b601f821115620005c657620005908162000444565b6200059b8462000459565b81016020851015620005ab578190505b620005c3620005ba8562000459565b83018262000554565b50505b505050565b600082821c905092915050565b6000620005eb60001984600802620005cb565b1980831691505092915050565b6000620006068383620005d8565b9150826002028217905092915050565b6200062182620003d5565b67ffffffffffffffff8111156200063d576200063c6200020b565b5b6200064982546200040f565b620006568282856200057b565b600060209050601f8311600181146200068e576000841562000679578287015190505b620006858582620005f8565b865550620006f5565b601f1984166200069e8662000444565b60005b82811015620006c857848901518255600182019150602085019450602081019050620006a1565b86831015620006e85784890151620006e4601f891682620005d8565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f4552433136353a20696e76616c696420696e7465726661636520696400000000600082015250565b600062000746601c83620006fd565b915062000753826200070e565b602082019050919050565b60006020820190508181036000830152620007798162000737565b9050919050565b6106e480620007906000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806301ffc9a71461005c578063209652551461008c57806355241077146100aa5780635a9b0b89146100c65780638da5cb5b146100e4575b600080fd5b610076600480360381019061007191906103e4565b610102565b604051610083919061042c565b60405180910390f35b610094610179565b6040516100a19190610460565b60405180910390f35b6100c460048036038101906100bf91906104a7565b610183565b005b6100ce610261565b6040516100db9190610564565b60405180910390f35b6100ec6102f3565b6040516100f991906105c7565b60405180910390f35b600061010d8261031d565b806101725750600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff165b9050919050565b6000600154905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610213576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020a9061062e565b60405180910390fd5b80600181905550803373ffffffffffffffffffffffffffffffffffffffff167fe2b64d6eb95e02b6354c9dad0f0b75f05c8659bc5f2a0f91bc457fc27c55c68860405160405180910390a350565b6060600280546102709061067d565b80601f016020809104026020016040519081016040528092919081815260200182805461029c9061067d565b80156102e95780601f106102be576101008083540402835291602001916102e9565b820191906000526020600020905b8154815290600101906020018083116102cc57829003601f168201915b5050505050905090565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6103c18161038c565b81146103cc57600080fd5b50565b6000813590506103de816103b8565b92915050565b6000602082840312156103fa576103f9610387565b5b6000610408848285016103cf565b91505092915050565b60008115159050919050565b61042681610411565b82525050565b6000602082019050610441600083018461041d565b92915050565b6000819050919050565b61045a81610447565b82525050565b60006020820190506104756000830184610451565b92915050565b61048481610447565b811461048f57600080fd5b50565b6000813590506104a18161047b565b92915050565b6000602082840312156104bd576104bc610387565b5b60006104cb84828501610492565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561050e5780820151818401526020810190506104f3565b60008484015250505050565b6000601f19601f8301169050919050565b6000610536826104d4565b61054081856104df565b93506105508185602086016104f0565b6105598161051a565b840191505092915050565b6000602082019050818103600083015261057e818461052b565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105b182610586565b9050919050565b6105c1816105a6565b82525050565b60006020820190506105dc60008301846105b8565b92915050565b7f596f7520617265206e6f7420746865206f776e65720000000000000000000000600082015250565b60006106186015836104df565b9150610623826105e2565b602082019050919050565b600060208201905081810360008301526106478161060b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061069557607f821691505b6020821081036106a8576106a761064e565b5b5091905056fea264697066735822122028e5dfb4d206f3b2925ea2a0d0a7216bda9fcfc0929ddfdb783aebd9322fa49b64736f6c63430008130033a264697066735822122040e3881ca607bbeebee026d3787b33a20e102ae884505f7994b2c2bb1709e94264736f6c63430008130033";

type ProposalFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProposalFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProposalFactory__factory extends ContractFactory {
  constructor(...args: ProposalFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _drexTokenAddress: AddressLike,
    _companyTokenAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _drexTokenAddress,
      _companyTokenAddress,
      overrides || {}
    );
  }
  override deploy(
    _drexTokenAddress: AddressLike,
    _companyTokenAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _drexTokenAddress,
      _companyTokenAddress,
      overrides || {}
    ) as Promise<
      ProposalFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ProposalFactory__factory {
    return super.connect(runner) as ProposalFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProposalFactoryInterface {
    return new Interface(_abi) as ProposalFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ProposalFactory {
    return new Contract(address, _abi, runner) as unknown as ProposalFactory;
  }
}
