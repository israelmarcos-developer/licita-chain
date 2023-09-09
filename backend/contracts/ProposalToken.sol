// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

contract ProposalToken is Ownable {
    event ValueChanged(address indexed whoChanged, uint256 indexed newValue);

    uint256 value;
    string info;

    constructor(uint _value, string memory _info) Ownable() {
        value = _value;
        info = _info;
    }

    function getValue() external view returns (uint256) {
        return value;
    }

    function getInfo() external view returns (string memory) {
        return info;
    }

    function setValue(uint256 _newValue) external onlyOwner {
        value = _newValue;
        emit ValueChanged(msg.sender, _newValue);
    }
}
