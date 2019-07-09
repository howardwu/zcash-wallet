const twallet = require('./src/t-wallet')
const zwallet = require('./src/z-wallet')

// Generates a random WIF key.
function generateWIF (network, compressed) {
  return twallet.createWIF(network, compressed)
}

// Generates the public key associated with a given WIF key.
function generatePublicKeyFromWIF (wif, network) {
  return twallet.convertWIFToPublicKey(wif, network).toString()
}

// Generates the address associated with a given WIF key.
function generateAddressFromWIF (wif, network) {
  return twallet.convertWIFToAddress(wif, network).toString()
}

// Generates a random spending key.
function generateSpendingKey (network) {
  return zwallet.createSpendingKey(network)
}

// Generates the address associated with a given spending key.
function generateAddressFromSpendingKey (key, network) {
  return zwallet.convertSpendingKeyToAddress(key, network)
}

// Generates the viewing key associated with a given spending key.
function generateViewingKeyFromSpendingKey (key, network) {
  return zwallet.convertSpendingKeyToViewingKey(key, network)
}

// Generates a Zcash t-address wallet.
function generateTAddress (network, compressed) {
  const wif = generateWIF(network, compressed)
  const publicKey = generatePublicKeyFromWIF(wif, network)
  const address = generateAddressFromWIF(wif, network)
  return { key: wif, publicKey: publicKey, address: address }
}

// Generates a Zcash z-address wallet.
function generateZAddress (network) {
  const spendingKey = generateSpendingKey(network)
  const viewingKey = generateViewingKeyFromSpendingKey(spendingKey, network)
  const address = generateAddressFromSpendingKey(spendingKey, network)
  return { spendingKey: spendingKey, viewingKey: viewingKey, address: address }
}

module.exports = {
  generateWIF: generateWIF,
  generatePublicKeyFromWIF: generatePublicKeyFromWIF,
  generateAddressFromWIF: generateAddressFromWIF,
  generateTransparentTransaction: generateTransparentTransaction,
  generateSpendingKey: generateSpendingKey,
  generateAddressFromSpendingKey: generateAddressFromSpendingKey,
  generateViewingKeyFromSpendingKey: generateViewingKeyFromSpendingKey,
  generateTAddress: generateTAddress,
  generateZAddress: generateZAddress
}
