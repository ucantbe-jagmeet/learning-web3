const Web3 = require("web3");
let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
// let balance = web3.eth
//   .getBalance("0xA47b9c0b748f4bAF7316c5FFCa5ABB3223e1cEa6")
//   .then((result) => {
//     console.log(result);
//   });

// to convert balance to ether
// web3.eth
//   .getBalance("0xA47b9c0b748f4bAF7316c5FFCa5ABB3223e1cEa6")
//   .then(function (result) {
//     console.log(web3.utils.fromWei(result, "ether"));
//   });

// how to transfer ether from one account to another
web3.eth.sendTransaction({
  from: "0xA47b9c0b748f4bAF7316c5FFCa5ABB3223e1cEa6",
  to: "0x70e055b53B850Da94AaA9821ec9dfE7C162AeB45",
  value: web3.utils.toWei("5", "ether"),
});

// web3.eth
//   .getBalance("0x70e055b53B850Da94AaA9821ec9dfE7C162AeB45")
//   .then(function (result) {
//     console.log(web3.utils.fromWei(result, "ether"));
//   });
