const hre = require("hardhat");

async function main() {
  // eslint-disable-next-line no-undef
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);
  
  const wbnb = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
  
  const ROUTER_01 = await hre.ethers.getContractFactory("PancakeRouter01");
  const router01 = await ROUTER_01.deploy(factory.address, wbnb);
  await router01.deployed();
  console.log("router_01 deployed to:", router01.address.toString());

  const ROUTER_MAIN = await hre.ethers.getContractFactory("PancakeRouter");
  const routerMain = await ROUTER_MAIN.deploy(factory.address, wbnb);
  await routerMain.deployed();
  console.log("router_main deployed to:", routerMain.address.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});