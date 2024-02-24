const { ethers } = require('ethers');

// Contract ABI
const abi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_num",
                "type": "uint256"
            }
        ],
        "name": "setVal",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getVal",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

// Contract address
const contractAddress = '0x186b80f8a2d609d5b0657a615e97959acf5e7e23';

// Connect to an Ethereum provider
const provider = new ethers.JsonRpcProvider('https://sepolia.infura.io/v3/9319683a4f0c40cdb96ac5b02628ba31');

// Connect to the contract
const contract = new ethers.Contract(contractAddress, abi, provider);

// Signer (assuming you have your private key)
const privateKey = '90ab040772cc44ad396f2da2aa5e2cf108f1e5834bfdc73646c832c7d919cc54';
const signer = new ethers.Wallet(privateKey, provider);

// Connect the signer to the contract
const connectedContract = contract.connect(signer);

//! write Operation

async function callSetVal() {
    const tx = await connectedContract.setVal(786);
    await tx.wait();
    console.log('setVal transaction hash:', tx.hash);
}

callSetVal();

//! Read Operation
/*
const check = async () => {
    const view = await contract.getVal();
    console.log(view);
}
check();
*/