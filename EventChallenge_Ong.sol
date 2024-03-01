// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BalanceManager {
    mapping(address => uint256) public balances;

    event BalanceAdded(address indexed account, uint256 amount);
    event BalanceDeducted(address indexed account, uint256 amount);
    event BalanceDisplayed(address indexed account, uint256 balance);

    function addBalance(uint256 _amount) external {
        balances[msg.sender] += _amount;
        emit BalanceAdded(msg.sender, _amount);
    }

    function deductBalance(uint256 _amount) external {
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        balances[msg.sender] -= _amount;
        emit BalanceDeducted(msg.sender, _amount);
    }

    function displayBalance() external {
        emit BalanceDisplayed(msg.sender, balances[msg.sender]);
    }
}