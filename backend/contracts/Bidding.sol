// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "./interfaces/OwnableInterface.sol";
import "./interfaces/ProposalTokenInterface.sol";
import "./interfaces/CompanyContractInterface.sol";
import "./RealDigital.sol";

contract Bidding {

    struct Details {
        bytes32 biddingId;
        string title;
        bytes deployTime;
        string proposal;
        address choosenProposal;
        address biddingPayableTokenAddress;
        bytes32 state;
    }

    /**
     * These constants are the possible bidding states
     */
    bytes32 public constant STOPED_STATE = keccak256("STOPED_STATE");
    bytes32 public constant FINISHED_STATE = keccak256("FINISHED_STATE");
    bytes32 public constant IN_PROGRESS_STATE = keccak256("IN_PROGRESS_STATE");

    /**
     * These are the bidding details
     */
    Details biddinDetails;
    bytes public CurrentTimestamp = abi.encodePacked(block.timestamp);
    string[] proposalAddresses;

    /**
     * Modifier to validate current state
     */
    modifier OnlyState(bytes32 _state) {
        require(biddinDetails.state == _state, "This function is blocked by the state");
        _;
    }

    /**
     * Events for contract logs
     */
    event PayBidding(uint256 indexed _value, address indexed _choosenProposalAddress, address indexed _companyTokenAddress);

    constructor(string memory _title, address _biddingPayableTokenAddress, string memory _proposal) {
        biddinDetails = Details(
            keccak256(CurrentTimestamp), 
            _title, 
            CurrentTimestamp, 
            _proposal, 
            address(0),
            _biddingPayableTokenAddress,
            IN_PROGRESS_STATE);
    }

    function payBidding(address _winnerProposalTokenAddress) external {
        require(biddinDetails.choosenProposal != address(0), "No proposal has been chosen yet");

        address proposalOwner = OwnableInterface(_winnerProposalTokenAddress).owner();

        uint amountToBeTransferedToWinner = IERC20(biddinDetails.biddingPayableTokenAddress).balanceOf(address(this)) - 
            ProposalTokenInterface(_winnerProposalTokenAddress).getValue();

        uint amountToBeTransferedBackToGovernment = IERC20(biddinDetails.biddingPayableTokenAddress).balanceOf(address(this)) - 
            amountToBeTransferedToWinner;

        IERC20(biddinDetails.biddingPayableTokenAddress).transfer(proposalOwner, amountToBeTransferedToWinner);
        IERC20(biddinDetails.biddingPayableTokenAddress).transfer(proposalOwner, amountToBeTransferedBackToGovernment);

        biddinDetails.state = FINISHED_STATE; // it will block any other actions except by consulting

        emit PayBidding(amountToBeTransferedToWinner, _winnerProposalTokenAddress, proposalOwner);
    }

    function registerNewProposal(address _proposalAddress) external {
        require(CompanyContractInterface(msg.sender).balanceOf(tx.origin) > 0, "This wallet is not the owner of any company");

        // proposalAddresses.push(_proposalAddress);
    } 

    function getBiddingAvailableBudget() view public returns(uint256 balance){
        return IERC20(biddinDetails.biddingPayableTokenAddress).balanceOf(address(this));
    }

    function getPayableTokenAddress() view public returns(address _payableTokenAddress) { _payableTokenAddress = biddinDetails.biddingPayableTokenAddress; }
    function getProposal() view public returns(string memory _proposal) { _proposal = biddinDetails.proposal; }
    function getDeployTime() view public returns(bytes memory _deployTime) { _deployTime = biddinDetails.deployTime; }
    function getId() view public returns(bytes32 _id) { _id = biddinDetails.biddingId; }
    function getTitle() view public returns(string memory _title) { _title = biddinDetails.title; }
}