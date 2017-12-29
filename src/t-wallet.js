var zcash = require('zcash-bitcore-lib')

// Validate network parameter is a `mainnet` or `testnet` string.
function validateNetwork (network) {
  if (network === undefined || network === null) {
    return false
  } else if (network !== 'mainnet' && network !== 'testnet') {
    return false
  } else {
    return true
  }
}

// Generates a new WIF
function createWIF (network) {
  if (!validateNetwork(network)) {
    throw new Error('Invalid network choice')
  }

  return new zcash.PrivateKey(null, network).toWIF()
}

// Converts a provided WIF string to an address string
function convertWIFToAddress (wif, network) {
  if (!validateNetwork(network)) {
    throw new Error('Invalid network choice')
  }

  return new zcash.PrivateKey(wif, network).toAddress()
}

module.exports = {
  createWIF: createWIF,
  convertWIFToAddress: convertWIFToAddress
}
