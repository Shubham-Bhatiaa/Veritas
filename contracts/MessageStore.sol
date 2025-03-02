// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessageStore {
    string public message;

    event MessageUpdated(string newMessage);

    constructor(string memory _initialMessage) {
        message = _initialMessage;
    }

    function setMessage(string memory _newMessage) public {
        message = _newMessage;
        emit MessageUpdated(_newMessage);
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}

