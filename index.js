const Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
web3.eth.defaultAccount=web3.eth.accounts[0];
const ABI = require("./abi.js").abi;

const ADDRESS = "0x09ce7c529fd05ca8e5599f0ed424f48cd2a5424e";
const OWNER = "0xfc49f3aedc6d2f0cab4e0a1ff66913ccf2fe366e";
const contract = new web3.eth.Contract(ABI, ADDRESS);

const getBalance = async (address) => {
    return await contract.methods.balanceOf(address).call();
};

const transfer = async (address) => {
    return await contract.methods.transfer(address, 100).send({
        from: OWNER,
    });
};

(async () => {
    console.log(await getBalance(OWNER));
})();

// (async () => {
//     console.log(await transfer("0x6299e72f39edd1d3890a30570ed6f0eb6f4ee88f"));
// })();
