// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./RealDigital.sol";

contract Bidding is ERC721 {
    using Counters for Counters.Counter;

    struct Details {
        bytes32 biddingId;
        string title;
        bytes deployTime;
        string proposal;
        address biddingPayableTokenAddress;
        bytes32 state;
    }

    /**
     * These constants are the possible bidding states
     */
    bytes32 public constant STOPED_STATE = keccak256("STOPED_STATE");
    bytes32 public constant FINISHED_STATE = keccak256("FINISHED_STATE");
    bytes32 public constant IN_PROGRESS_STATE = keccak256("FINISHED_STATE");

    /**
     * These are the bidding details
     */
    Details biddinDetails;
    Counters.Counter private counter;
    bytes public CurrentTimestamp = abi.encodePacked(block.timestamp);

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
    event PayBidding(uint256 _value, address _factoryAddress);

    constructor(string memory _title, address _biddingPayableTokenAddress, string memory _proposal) ERC721("GovBidding", "GOVB") {
        biddinDetails = Details(
            keccak256(CurrentTimestamp), 
            _title, 
            CurrentTimestamp, 
            _proposal, 
            _biddingPayableTokenAddress,
            IN_PROGRESS_STATE);
        _mint(msg.sender, counter.current());
    }

    function getBiddingPrice() view public returns(uint256 balance){
        balance = IERC20(biddinDetails.biddingPayableTokenAddress).balanceOf(address(this));
    }

    function getPayableTokenAddress() view public returns(address _payableTokenAddress) { _payableTokenAddress = biddinDetails.biddingPayableTokenAddress; }
    function getProposal() view public returns(string memory _proposal) { _proposal = biddinDetails.proposal; }
    function getDeployTime() view public returns(bytes memory _deployTime) { _deployTime = biddinDetails.deployTime; }
    function getId() view public returns(bytes32 _id) { _id = biddinDetails.biddingId; }
    function getTitle() view public returns(string memory _title) { _title = biddinDetails.title; }
}