async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());
    const MWT = await ethers.getContractFactory("WARRIORMAMMOTHS");

    // Start deployment, returning a promise that resolves to a contract object
    const tor = await MWT.deploy();
    console.log("Contract deployed to address:", tor.address);
 }

 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });