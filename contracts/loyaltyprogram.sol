// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract LoyaltyProgram {
    address public owner; //contract owner
    
    struct Customer { //structure of customers
        uint256 balance; // can call to check the balance points
        bool isRegistered; //customer MUST register to be able to earn or redeem points
    }
    
    mapping(address => Customer) public customers; //dictionary of customers
    mapping(uint256 => uint256) public rewards; // dictionary of the rewards
    mapping(uint256 => string) public rewardNames; // dictionary of rewardID can be assigned a reward description
    
    event Registered(address customer); 
    event PointsEarned(address customer, uint256 pointsEarned);
    event PointsRedeemed(address customer, uint256 pointsRedeemed, uint256 rewardId);
    event RewardAdded(uint256 rewardId, uint256 pointsRequired, string rewardName);
    
    constructor() { //function run once when deployed, setting deployer as owner
        owner = msg.sender; //contract deployer becomes owner
    }
    
    modifier onlyOwner() { //making only owner can modify modifier
        require(msg.sender == owner, "Only the owner can call this function"); //caller must be owner
        _;
    }
    
    function register() public { //function to register customer
        require(!customers[msg.sender].isRegistered, "Customer is already registered");
        customers[msg.sender] = Customer(100, true); // Upon registering the customer earns 100 points
        emit Registered(msg.sender); //notify and update customer status
    }
    
    function earnPoints(uint256 points, address _customer) public onlyOwner{ //only owner can give points to customer
        //require(customers[msg.sender].isRegistered, "Customer is not registered"); //if customer did not register then points cannot be earned
        customers[_customer].balance += points; // for adding points to balance points
        emit PointsEarned(msg.sender, points); //notify to update customer points
    }
    
    function checkBalance() public view returns (uint256) { //fucntion to check balance
        return customers[msg.sender].balance;// for checking the balance points
    }
    
    function redeemPoints(uint256 rewardId) public { //fucntion to redeem points
        require(customers[msg.sender].isRegistered, "Customer is not registered"); //customer must be registered 
        require(rewards[rewardId] > 0, "Reward not found"); // rewards must be in dictionary
        require(customers[msg.sender].balance >= rewards[rewardId], "Insufficient points"); // if customer balance points is less than the reward points
        
        customers[msg.sender].balance -= rewards[rewardId]; // for deducting reward points from balance points
        emit PointsRedeemed(msg.sender, rewards[rewardId], rewardId); //notify and update points redeem
    }
    
    function addReward(uint256 rewardId, uint256 pointsRequired, string memory rewardName) public onlyOwner { //only owner can add rewards
        rewards[rewardId] = pointsRequired; // rewardID is used to redeem, need to assign a number and points
        rewardNames[rewardId] = rewardName; // assign a reward name to a reward id
        emit RewardAdded(rewardId, pointsRequired, rewardName); //notify and update rewards dictionary
    }
}
