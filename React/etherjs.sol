// SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0 < 0.9.0;

contract Ether {
    string public name="Wallet";
    uint num;
    //write
    function setVal(uint _num) public {
        num=_num;
    }
    // Read
    function getVal() public view returns(uint) {
        return num;
    }
    // write
    function setEthContract() public payable {

    }
    // read
    function contractBal() public view returns(uint) {
        return address(this).balance;
    }
    //write
    function sendEthUser(address _user) public payable {
        payable(_user).transfer(msg.value);
    }
    //read
    function AccountBal( address _addr) public view returns(uint) {
        return (_addr).balance;
    }
}
