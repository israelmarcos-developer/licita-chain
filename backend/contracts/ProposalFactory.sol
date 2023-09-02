// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";
import "./ProposalToken.sol";
import "./interfaces/CompanyContractInterface.sol";

contract ProposalFactory {
    event ProposalTokenEmmitted(
        address indexed owner,
        address indexed newContract
    );

    constructor() {}

    function createProposalToken(
        uint _value,
        string memory _info,
        address _companyContractAddress
    ) external {
        CompanyContractInterface companyContract = CompanyContractInterface(
            _companyContractAddress
        );

        string memory cnpj = companyContract.getCNPJ(msg.sender);

        require(bytes(cnpj).length > 0, "There");

        ProposalToken newToken = new ProposalToken(_value, _info);
        
        emit ProposalTokenEmmitted(msg.sender, address(newToken));
    }
}
