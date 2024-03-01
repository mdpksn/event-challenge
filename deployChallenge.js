const { ethers } = require("hardhat");

async function main() {
    const EventTest = await hre.ethers.getContractFactory("myBank");
    const eventTest = await EventTest.deploy();

    // Capture events
    contract.on("BalanceAdded", (account, amount) => {
        console.log("Balance added:");
        console.log("Account:", account);
        console.log("Amount:", amount.toString());
    });

    contract.on("BalanceDeducted", (account, amount) => {
        console.log("Balance deducted:");
        console.log("Account:", account);
        console.log("Amount:", amount.toString());
    });

    contract.on("BalanceDisplayed", (account, balance) => {
        console.log("Balance displayed:");
        console.log("Account:", account);
        console.log("Balance:", balance.toString());
    });

    // Interact with the contract
    await contract.addBalance(100); // Add balance to the account
    await contract.displayBalance(); // Display the current balance
    await contract.deductBalance(50); // Deduct balance from the account
    await contract.displayBalance(); // Display the updated balance

    // Remove event listeners when done
    contract.removeAllListeners();
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });