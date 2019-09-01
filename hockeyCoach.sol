pragma solidity ^0.5.0;

contract Coach {
    string name;
    uint age;
    
    function setCoach(string memory _name, uint _age) public {
        name = _name;
        age = _age;
    }
    
    function getCoach() public view returns(string memory, uint) {
        return(name, age);
    }
}