// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KaleToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("KaleToken", "KALE") {
        _mint(msg.sender, initialSupply);
    }
}
