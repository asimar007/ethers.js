const { ethers } = require('ethers')

const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/9319683a4f0c40cdb96ac5b02628ba31`)

const blockno = async () => {
    // const id = await provider.getBlockNumber();
    // console.log("Current Block Number", id);
    const balance = await provider.getBalance("0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5");

    console.log(balance);
}
blockno();