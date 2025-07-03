// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
  string public greeting = "Hello, Web3!";
  function setGreeting(string calldata _g) external {
    greeting = _g;
  }
}
