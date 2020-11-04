
const EC = require("elliptic").ec;
const SHA256 = require("crypto-js/sha256");

var ec = new EC("secp256k1");

var privateKey = ec.genKeyPair();
var publicKey = privateKey.getPublic().encode("hex");

const msgHash = SHA256("Uma frase qualquer").toString();

const signature = privateKey.sign(msgHash);

var isSigned4me = ec.keyFromPublic(publicKey, "hex").verify(msgHash, signature);

console.log(isSigned4me);

//console.log(signature);
