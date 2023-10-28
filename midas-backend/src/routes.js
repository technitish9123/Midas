const express = require("express");
const ethers = require("ethers");
const proof = require("../passcode_js/proof.json");
const { prove, keccak } = require("./services");
const keccak256 = require("keccak256");
const router = express.Router();

router.get("/random", (req, res) => {
  const min = 10;
  const max = 30;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  res.send({ randomNumber });
});

router.get("/getProof", (req, res) => {
  try {
    const proofs = [
      proof.pi_a[0],
      proof.pi_a[1],
      proof.pi_b[0][1],
      proof.pi_b[0][0],
      proof.pi_b[1][1],
      proof.pi_b[1][0],
      proof.pi_c[0],
      proof.pi_c[1],
    ];
    for (let i = 0; i < proofs.length; i++) {
      // string -> BN:
      console.log(proofs[i]);

      proofs[i] = ethers.BigNumber.from(proofs[i]).toHexString();
      console.log(proofs[i]);
    }
    res.send({ proofs });
  } catch (err) {
    console.log(err);
  }
});

router.post("/generateProof", async (req, res) => {
  const { account, password } = req.body;
  const passcode = ethers.BigNumber.from(keccak(account + password));
  let { proof, publicSignals } = await prove(
    ethers.BigNumber.from("0"),
    passcode
  );
  console.log(publicSignals);
  const passcodeHash = ethers.BigNumber.from(publicSignals[0]);
  res.send({ passcodeHash });
});

router.post("/retrieveProof", async (req, res) => {
  let { account, password, creator } = req.body;
  const payload = creator.toLowerCase() + password;
  console.log(payload);
  const passcode = ethers.BigNumber.from(keccak(payload));
  console.log(passcode)
  account = account.toLowerCase();
  const accountBN = ethers.BigNumber.from(account);
  console.log(accountBN);
  const secretBN = passcode.sub(accountBN);
  console.log(secretBN)
  let { proof, publicSignals } = await prove(accountBN.toString(), secretBN.toString());
  let passcodeHashBN = ethers.BigNumber.from(publicSignals[0]);
  const proofs = [
    proof.pi_a[0],
    proof.pi_a[1],
    proof.pi_b[0][1],
    proof.pi_b[0][0],
    proof.pi_b[1][1],
    proof.pi_b[1][0],
    proof.pi_c[0],
    proof.pi_c[1],
  ];
  console.log(proofs)
  for (let i = 0; i < proofs.length; i++) {
    // string -> BN:
    console.log(proofs[i]);

    proofs[i] = ethers.BigNumber.from(proofs[i]).toHexString();
    console.log(proofs[i]);
  }
  const passcodeHashBNHex = passcodeHashBN.toHexString();
  const accountBNHex = accountBN.toHexString();;
  res.send({ proofs, passcodeHashBNHex, accountBNHex});
});

module.exports = router;
