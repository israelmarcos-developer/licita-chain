// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "./interfaces/CompanyContractInterface.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract CompanyContract is
    CompanyContractInterface,
    ERC721,
    ERC721Burnable,
    AccessControl
{
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    mapping(address => string) private cnpjs;

    constructor() ERC721("CompanyToken", "CMP") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    function safeMint(
        address to,
        string memory _cnpj
    ) public onlyRole(MINTER_ROLE) {
        _safeMint(to, uint(keccak256(abi.encodePacked(_cnpj))));
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, AccessControl, IERC165) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function getCNPJ(address _owner) external view returns (string memory) {
        require(
            _owner != address(0),
            "Company Token: address zero is not a valid owner"
        );
        require(
            balanceOf(tx.origin) > 0,
            "This Wallet doesn't contain a token"
        );

        return cnpjs[_owner];
    }
}