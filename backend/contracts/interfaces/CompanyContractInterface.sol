// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface CompanyContractInterface {

    function getCNPJ(address _owner) external view returns (string memory);
}