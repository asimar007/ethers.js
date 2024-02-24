const { ethers } = require("ethers");
const provider = new ethers.JsonRpcProvider(`put your infura url`);// my case i use Infura

const wallteAddress = " put Your Deployment address";
const walletABI = "your abi without double quotes";
const contractInteraction = async () => {
  const walletContract = new ethers.Contract(wallteAddress, walletABI, provider);
  const ContractName = await walletContract.name();
  console.log(ContractName);

  const ContractB = await walletContract.contractBal();
  console.log(ContractB);

  const Acc = await walletContract.AccountBal("Wallet Address");
  console.log(Acc);

  const payel = await walletContract.getVal();
  console.log(payel);
}
contractInteraction();