const { default: Web3 } = require("web3");

var MyToken = artifacts.require("./MyToken.sol");
var MyTokenSale = artifacts.require("./MyTokenSale.sol");
var KycContract = artifacts.require("./KycContract.sol");

require("dotenv").config({path: "C:/Users/ruchi/test/.env"});
console.log(process.log);

  module.exports = async function(deployer) {
    let addr = await web3.eth.getAccounts();
    await deployer.deploy(MyToken, process.env.INITIAL_TOKENS);
    await deployer.deploy(KycContract);
    await deployer.deploy(MyTokenSale, 1, addr[0], MyToken.address, KycContract.address);
    let tokenInstance = await MyToken.deployed();
    await tokenInstance.transfer(MyTokenSale.address, process.env.INITIAL_TOKENS);
};