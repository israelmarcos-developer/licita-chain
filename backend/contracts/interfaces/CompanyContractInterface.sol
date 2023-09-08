// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/interfaces/IERC721.sol";

interface CompanyContractInterface is IERC721 {

    function getCNPJ(address _owner) external view returns (string memory);
}