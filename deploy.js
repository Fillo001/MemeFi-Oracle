const hre = require("hardhat");

async function main() {
  const Kale = await hre.ethers.getContractFactory("KaleToken");
  const kale = await Kale.deploy(1000000); 
  await kale.deployed();
  console.log("KaleToken deployed:", kale.address);

  const Staking = await hre.ethers.getContractFactory("MemeStaking");
  const staking = await Staking.deploy(kale.address);
  await staking.deployed();
  console.log("MemeStaking deployed:", staking.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
