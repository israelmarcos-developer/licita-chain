// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

interface ProposalTokenInterface {

    event ValueChanged(address indexed whoChanged, uint256 indexed newValue);

    function getValue() external view returns(uint256);

    function getInfo() external view returns(string memory);

    function setValue(uint256 _newValue) external;

}