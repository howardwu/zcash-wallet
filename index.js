const wallet = require('./src/wallet')

// Generates a random spending key.
function generateSpendingKey (network) {
  return wallet.createSpendingKey(network)
}

// Generates the address associated with a given spending key.
function generateAddressFromSpendingKey (key, network) {
  return wallet.convertSpendingKeyToAddress(key, network)
}

// Generates the viewing key associated with a given spending key.
function generateViewingKeyFromSpendingKey (key, network) {
  return wallet.convertSpendingKeyToViewingKey(key, network)
}

// Generates a Zcash private wallet.
function generateWallet (network) {
  const spendingKey = generateSpendingKey(network)
  const viewingKey = generateViewingKeyFromSpendingKey(spendingKey, network)
  const address = generateAddressFromSpendingKey(spendingKey, network)
  return { spendingKey: spendingKey, viewingKey: viewingKey, address: address }
}

module.exports = {
  generateSpendingKey: generateSpendingKey,
  generateAddressFromSpendingKey: generateAddressFromSpendingKey,
  generateViewingKeyFromSpendingKey: generateViewingKeyFromSpendingKey,
  generateWallet: generateWallet
}
