// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";
import "./ProposalToken.sol";
import "./interfaces/CompanyContractInterface.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/interfaces/IERC721.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";

contract ProposalFactory is AccessControl {
    event ProposalTokenEmmitted(
        address indexed owner,
        address indexed newContract
    );

    address private CompanyToken;
    address private DrexTokenAddress;

    modifier onlyCompany() {
        require(
            IERC721(CompanyToken).balanceOf(msg.sender) > 0,
            "You cannot use this function because you don't own a company"
        );
        _;
    }

    constructor(address _drexTokenAddress, address _govToken) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        DrexTokenAddress = _drexTokenAddress;
        CompanyToken = _govToken;
    }

    function createProposalToken(
        uint256 _proposalValue,
        string memory _info,
        address _companyContractAddress
    ) external onlyCompany {
        uint256 senderBalance = IERC20(DrexTokenAddress).balanceOf(msg.sender);
        uint256 allowance = IERC20(DrexTokenAddress).allowance(
            tx.origin,
            address(this)
        );
        require(
            senderBalance >= _proposalValue,
            "Insufficient balance of DREX"
        );
        require(allowance >= _proposalValue, "Insufficient allowance");

        require(
            IERC721(_companyContractAddress).balanceOf(tx.origin) > 0,
            "There are no company tokens in your wallet"
        );

        ProposalToken newToken = new ProposalToken(_proposalValue, _info);

        emit ProposalTokenEmmitted(msg.sender, address(newToken));
    }
}
