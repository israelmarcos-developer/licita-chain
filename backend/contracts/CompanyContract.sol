// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "./interfaces/CompanyContractInterface.sol";

contract CompanyContract is CompanyContractInterface {

    mapping(address => string) private cnpjs;
    mapping(address => bool) private hasCNPJ;

    constructor(string memory _cnpj) {
        cnpjs[msg.sender] = _cnpj;
        hasCNPJ[msg.sender] = true;
    }

    function getCNPJ(address _owner) external view returns (string memory) {
        require(_owner != address(0), "Company Token: address zero is not a valid owner");
        require(hasCNPJ[_owner] == true, "Company is not registered");
    
        return cnpjs[_owner];
    }

}