const path = require("path");
require('dotenv').config({path: 'C:/Users/ruchi/test/.env'});
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MetaMaskAccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 7545,
      network_id: 5777,
      host: "127.0.0.1"
    },
     ganache_local: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:7545", MetaMaskAccountIndex);
      },
      network_id : 5777
    },
    ropsten_infura: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/0376ef31fcb1441c8793ff1cecb215a0", MetaMaskAccountIndex);
      },
      network_id: 3
    }
  },
  compilers: {
      solc: {
        version : "^0.6.0"
      }
  }
};
