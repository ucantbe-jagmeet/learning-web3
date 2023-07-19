const Web3 = require("web3");
let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
let contract = new web3.eth.Contract(
  [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_x",
          type: "uint256",
        },
      ],
      name: "set",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "x",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  "0x25f9b2f24fd54dcebf37b8841b83f8b3485b2998"
);

// contract.methods.x().call().then(console.log);
contract.methods.set(90).send({
  from: "0xA47b9c0b748f4bAF7316c5FFCa5ABB3223e1cEa6",
});
