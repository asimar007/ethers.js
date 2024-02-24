// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Hello {
    string public name="Asim";
    uint num;

    function setVal(uint _num) public {
        num=_num;
    }
    function getVal() public view returns(uint){
        return num;
    }
}