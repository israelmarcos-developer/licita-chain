// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/ProposalTokenInterface.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165Storage.sol";

contract ProposalToken is ProposalTokenInterface, ERC165Storage {

    uint256 value;
    string info;
    address _owner;

    modifier onlyOwner() {
        require(msg.sender == _owner, "You are not the owner");
        _;
    }

    constructor(uint _value, string memory _info) ERC165Storage() {
        value = _value;
        info = _info;
        _owner = address(tx.origin);
        _registerInterface(type(ProposalTokenInterface).interfaceId);
    }

    function getValue() public view returns (uint256) {
        return value;
    }

    function getInfo() external view override returns (string memory) {
        return info;
    }

    function setValue(uint256 _newValue) external override onlyOwner {
        value = _newValue;
        emit ValueChanged(msg.sender, _newValue);
    }

    function owner() public view returns(address) {
        return _owner;
    }
}
