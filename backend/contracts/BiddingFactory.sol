// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/interfaces/IERC721.sol";

import "./Bidding.sol";
import "./RealDigital.sol";

contract BiddingFactory is AccessControl {
    address private DrexTokenAddress;
    address private GovToken;
    address private CompanyToken;

    modifier OnlyPublicOrg() {
        require(IERC721(GovToken).balanceOf(msg.sender) > 0, "You cannot use this functions");
        _;
    }

    event NewBiddingEmitted(address indexed biddingAddress, uint256 indexed biddingValue, address biddingOwner);

    constructor(address _drexTokenAddress, address _govToken, address _companyTokenAddress) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        DrexTokenAddress = _drexTokenAddress;
        GovToken = _govToken;
        CompanyToken = _companyTokenAddress;
    }

    function createBidding(string memory _title, uint256 _biddingValue, string memory _proposal) payable public OnlyPublicOrg() {
        uint256 senderBalance = IERC20(DrexTokenAddress).balanceOf(msg.sender);
        uint256 allowance = IERC20(DrexTokenAddress).allowance(tx.origin, address(this));
        require(senderBalance >= _biddingValue, "Insufficient balance of DREX");
        require(allowance >= _biddingValue, "Insufficient allowance");
        
        Bidding BiddingContract = new Bidding(_title, DrexTokenAddress, CompanyToken, _proposal);

        sendFundsToBidding(tx.origin, address(BiddingContract), _biddingValue);
        emit NewBiddingEmitted(address(BiddingContract), _biddingValue, msg.sender);
    }

    function sendFundsToBidding(address _from, address _to, uint256 _amount) public {
        IERC20(DrexTokenAddress).transferFrom(_from, _to, _amount);
    }
}