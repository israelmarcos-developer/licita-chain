// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/access/AccessControl.sol";

import "./Bidding.sol";
import "./RealDigital.sol";

contract BiddingFactory is AccessControl {
    address private BiddingPayableTokenAddress;
    address private GovToken;

    modifier OnlyPublicOrg() {
        require(IERC721(GovToken).balanceOf(msg.sender) > 0, "You cannot use this functions");
        _;
    }

    event createNewBidding(address biddingAddress, uint256 biddingValue);

    constructor(address _biddingPayableTokenAddress, address _govToken) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        BiddingPayableTokenAddress = _biddingPayableTokenAddress;
        GovToken = _govToken;
    }

    function createBidding(string memory _title, uint256 _biddingValue, string memory _proposal) payable public OnlyPublicOrg() {
        uint256 senderBalance = ERC20(BiddingPayableTokenAddress).balanceOf(msg.sender);
        uint256 allowance = ERC20(BiddingPayableTokenAddress).allowance(tx.origin, address(this));
        require(senderBalance >= _biddingValue, "Insufficient balance of DREX");
        require(allowance >= _biddingValue, "Insufficient allowance");
        
        Bidding BiddingContract = new Bidding(_title, BiddingPayableTokenAddress, _proposal);

        payBidding(tx.origin, address(BiddingContract), _biddingValue);
        emit createNewBidding(address(BiddingContract), _biddingValue);
    }

    function payBidding(address _from, address _to, uint256 _amount) public {
        ERC20(BiddingPayableTokenAddress).transferFrom(_from, _to, _amount);
    }
}