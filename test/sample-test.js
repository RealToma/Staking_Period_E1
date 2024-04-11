const { expect } = require("chai");

describe("Test Staking Token", function() {
  it("Should return the new staking once it's changed", async function() {
    const [owner] = await ethers.getSigners();
    const StakingToken = await ethers.getContractFactory("Staking");
    const staking = await StakingToken.deploy();
    
    // await staking.deployed();
    const totalAmount = await staking.getTotalAmount();
    console.log("totalAmount",totalAmount);
    

    const rewardAddress = await staking.rewardAddress();
    console.log("rewardAddress:", rewardAddress);

    //expect(await staking.stake("100000000000000000000", "0")).to.equal("Okay!");
    // expect(await greeter.stake("10000000000000000", "0")).to.equal("Hello, world!");
  });
});
