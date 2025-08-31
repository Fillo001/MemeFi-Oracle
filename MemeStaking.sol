// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./KaleToken.sol";

contract MemeStaking {
    KaleToken public kale;
    mapping(address => uint256) public stakes;
    mapping(address => uint256) public rewards;

    constructor(address tokenAddress) {
        kale = KaleToken(tokenAddress);
    }

    function stake(uint256 amount) external {
        require(amount > 0, "Stake > 0 required");
        kale.transferFrom(msg.sender, address(this), amount);
        stakes[msg.sender] += amount;
        rewards[msg.sender] += amount / 10; // 10% bonus reward
    }

    function withdraw(uint256 amount) external {
        require(stakes[msg.sender] >= amount, "Not enough staked");
        stakes[msg.sender] -= amount;
        kale.transfer(msg.sender, amount);
    }

    function claimRewards() external {
        uint256 reward = rewards[msg.sender];
        require(reward > 0, "No rewards available");
        rewards[msg.sender] = 0;
        kale.transfer(msg.sender, reward);
    }
}
