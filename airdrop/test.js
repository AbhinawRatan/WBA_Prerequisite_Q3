const web3 = require("@solana/web3.js");
const bs58 = require('bs58');
let secretKey = bs58.decode("4VFST59hvAootmnSMct7GDeKnHGjjcfBSy2YWvbB9xCAFnKRhVCsonUHf4WxBvhUi2DToAkPYQz7VQxgGGGyoZRB");
console.log(`[${web3.Keypair.fromSecretKey(secretKey).secretKey}]`);

// exporting back from Uint8Array to bs58 private key
// == from solana cli id.json key file to phantom private key

