const { expect } = require("chai");

describe("KaleToken", function () {
  it("Should mint tokens", async function () {
    const [owner] = await ethers.getSigners();
    const Kale = await ethers.getContractFactory("KaleToken");
    const kale = await Kale.deploy(1000);
    await kale.deployed();

    expect(await kale.balanceOf(owner.address)).to.equal(1000);
  });
});
