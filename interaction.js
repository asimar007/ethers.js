const { ethers } = require('ethers');

// Contract ABI
const abi = your Code ABI

// Contract address
const contractAddress = 'contract address';

// Connect to an Ethereum provider
const provider = new ethers.JsonRpcProvider('https://sepolia.infura.io/v3/your url');

// Connect to the contract
const contract = new ethers.Contract(contractAddress, abi, provider);

// Signer (assuming you have your private key)
const privateKey='your Wallet Private Key';
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