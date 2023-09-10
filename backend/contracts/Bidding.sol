// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "./interfaces/OwnableInterface.sol";
import "./interfaces/ProposalTokenInterface.sol";
import "./interfaces/CompanyContractInterface.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165Checker.sol";
import "./RealDigital.sol";

import "hardhat/console.sol";

contract Bidding is ERC165 {
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
    address[] public proposalAddresses;
    address owner;

    /**
     * Modifier to validate current state
     */
    modifier OnlyState(bytes32 _state) {
        require(
            biddinDetails.state == _state,
            "This function is blocked by the state"
        );
        _;
    }

    modifier OnlyOwner() {
        require(msg.sender == owner, "The sender is not the owner");
        _;
    }

    /**
     * Events for contract logs
     */
    event PayBidding(
        uint256 indexed _value,
        address indexed _choosenProposalAddress,
        address indexed _companyTokenAddress
    );
    event NewProposalRegistered(
        address indexed _proposalOwner,
        address indexed _proposalAddress
    );
    event ProposalChosen(address indexed _chosenProposalAddress);

    constructor(
        string memory _title,
        address _biddingPayableTokenAddress,
        string memory _proposal
    ) {
        biddinDetails = Details(
            keccak256(CurrentTimestamp),
            _title,
            CurrentTimestamp,
            _proposal,
            address(0),
            _biddingPayableTokenAddress,
            IN_PROGRESS_STATE
        );
        owner = address(tx.origin);
    }

    function chooseWinner(
        address _winnerProposalTokenAddress
    ) public OnlyOwner OnlyState(IN_PROGRESS_STATE) {
        require(
            ERC165Checker.supportsInterface(
                _winnerProposalTokenAddress,
                type(ProposalTokenInterface).interfaceId
            ),
            "The address sent was not from a Proposal"
        );

        biddinDetails.choosenProposal = _winnerProposalTokenAddress;

        emit ProposalChosen(_winnerProposalTokenAddress);

        payBidding();
    }

    function payBidding() internal OnlyState(IN_PROGRESS_STATE) {
        require(
            biddinDetails.choosenProposal != address(0),
            "No proposal has been chosen yet"
        );

        console.log("Who sent: ", msg.sender);

        address proposalOwner = OwnableInterface(biddinDetails.choosenProposal)
            .owner();

        console.log("Who detected: ", proposalOwner);

        uint amountToBeTransferedToGovernment = IERC20(
            biddinDetails.biddingPayableTokenAddress
        ).balanceOf(address(this)) -
            ProposalTokenInterface(biddinDetails.choosenProposal).getValue();

        uint amountToBeTransferedToWinner = IERC20(
            biddinDetails.biddingPayableTokenAddress
        ).balanceOf(address(this)) - amountToBeTransferedToGovernment;

        IERC20(biddinDetails.biddingPayableTokenAddress).transfer(
            proposalOwner,
            amountToBeTransferedToWinner
        );
        IERC20(biddinDetails.biddingPayableTokenAddress).transfer(
            proposalOwner,
            amountToBeTransferedToGovernment
        );

        biddinDetails.state = FINISHED_STATE; // it will block any other actions except by consulting

        emit PayBidding(
            amountToBeTransferedToWinner,
            biddinDetails.choosenProposal,
            proposalOwner
        );
    }

    function registerNewProposal(
        address _proposalAddress
    ) external OnlyState(IN_PROGRESS_STATE) {
        require(
            CompanyContractInterface(msg.sender).balanceOf(tx.origin) > 0,
            "This wallet is not the owner of any company"
        );
        require(
            ERC165Checker.supportsInterface(
                _proposalAddress,
                type(ProposalTokenInterface).interfaceId
            ),
            "The address sent was not from a Proposal"
        );

        addMemberToProposalAddresses(_proposalAddress);
    }

    function getBiddingAvailableBudget() public view returns (uint256 balance) {
        return
            IERC20(biddinDetails.biddingPayableTokenAddress).balanceOf(
                address(this)
            );
    }

    function addMemberToProposalAddresses(
        address _newProposal
    ) public OnlyState(IN_PROGRESS_STATE) {
        proposalAddresses.push(_newProposal);

        emit NewProposalRegistered(tx.origin, _newProposal);
    }

    function getPayableTokenAddress()
        public
        view
        returns (address _payableTokenAddress)
    {
        _payableTokenAddress = biddinDetails.biddingPayableTokenAddress;
    }

    function getRegisteredProposals() public view returns(address[] memory) {
        return proposalAddresses;
    }

    function getProposal() public view returns (string memory _proposal) {
        _proposal = biddinDetails.proposal;
    }

    function getDeployTime() public view returns (bytes memory _deployTime) {
        _deployTime = biddinDetails.deployTime;
    }

    function getId() public view returns (bytes32 _id) {
        _id = biddinDetails.biddingId;
    }

    function getTitle() public view returns (string memory _title) {
        _title = biddinDetails.title;
    }
}
