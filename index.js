const twallet = require('./src/t-wallet')
const zwallet = require('./src/z-wallet')

// Generates a random WIF key.
function generateWIF (network) {
  return twallet.createWIF(network)
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
function generateTAddress (network) {
  const wif = generateWIF(network)
  const address = generateAddressFromWIF(wif, network)
  return { key: wif, address: address }
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
  generateAddressFromWIF: generateAddressFromWIF,
  generateSpendingKey: generateSpendingKey,
  generateAddressFromSpendingKey: generateAddressFromSpendingKey,
  generateViewingKeyFromSpendingKey: generateViewingKeyFromSpendingKey,
  generateTAddress: generateTAddress,
  generateZAddress: generateZAddress
}
