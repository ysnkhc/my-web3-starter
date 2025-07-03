const { expect } = require("chai");

describe("HelloWorld", function () {
  let HelloWorld, hw, owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    HelloWorld = await ethers.getContractFactory("HelloWorld");
    hw = await HelloWorld.deploy();
    await hw.deployed();
  });

  it("should return the default greeting", async function () {
    expect(await hw.greeting()).to.equal("Hello, Web3!");
  });

  it("should allow updating the greeting", async function () {
    await hw.setGreeting("Hi there!");
    expect(await hw.greeting()).to.equal("Hi there!");
  });
});
