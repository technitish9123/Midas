// Required dependencies
const { TextEncoder } = require('util');
const ethers = require('ethers');
const snarkjs = require('snarkjs');
const keccak256 = require("keccak256")

// Keccak256 hash function
function keccak(str) {
    let arr = new TextEncoder().encode(str);
    return ethers.utils.keccak256(arr);
}

// Function to prove using zk-SNARKs
async function prove(addrBN, secretBN) {
    return await snarkjs.groth16.fullProve(
        { addr: addrBN.toString(), secret: secretBN.toString() }, 
        "passcode_js/passcode.wasm", 
        "passcode_js/passcode_0001.zkey"
    );
}

// Convert string to big number with specified decimals
function toBN(s, decimals) {
    try {
        return ethers.utils.parseUnits(s.trim(), decimals);
    } catch (e) {
        return null;
    }
}

// Check if string is a valid big number with specified decimals
function isValidBN(s, decimals) {
    let bn = toBN(s, decimals);
    return bn !== null && !bn.isZero() && !bn.isNegative();
}

// Exporting the functions
module.exports = {
    keccak,
    prove,
    toBN,
    isValidBN
};
