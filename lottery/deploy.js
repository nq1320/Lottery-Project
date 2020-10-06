const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('g:/Blockchain/projects/lottery/compile');

const provider = new HDWalletProvider(
    'faith tip you swarm body skull credit sort eager pass stone tent',
    'https://rinkeby.infura.io/v3/a1562c00cce94b80a3ba36c1181e5eb4'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '1000000', from: accounts[0] });
    
    console.log(interface);
    console.log('Contract deployed to', result.options.address);
};
deploy();