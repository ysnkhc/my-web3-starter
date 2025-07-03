async function main() {
  const [deployer] = await ethers.getSigners();
  const HW = await ethers.getContractFactory("HelloWorld");
  const contract = await HW.deploy();
  console.log("Deployed to:", contract.address);
}

main().catch(console.error);
