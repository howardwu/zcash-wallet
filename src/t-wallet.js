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

// Validates the given WIF.
function validateWIF (wif) {
  if (wif === undefined || wif === null) {
    return false
  } else {
    return true
  }
}

// Generates a new WIF.
function createWIF (network, compressed) {
  if (!validateNetwork(network)) {
    throw new Error('Invalid network choice')
  }

  var data = {
    bn: zcash.PrivateKey._getRandomBN(),
    compressed: typeof compressed !== 'boolean' ? true : compressed,
    network
  }

  return new zcash.PrivateKey(data).toWIF()
}

// Converts a provided WIF string to a public key string.
function convertWIFToPublicKey (wif, network) {
  if (!validateNetwork(network)) {
    throw new Error('Invalid network choice')
  }

  if (!validateWIF(wif)) {
    throw new Error('Invalid WIF key')
  }

  return new zcash.PrivateKey(wif, network).toPublicKey()
}

// Converts a provided WIF string to an address string.
function convertWIFToAddress (wif, network) {
  if (!validateNetwork(network)) {
    throw new Error('Invalid network choice')
  }

  if (!validateWIF(wif)) {
    throw new Error('Invalid WIF key')
  }

  return new zcash.PrivateKey(wif, network).toAddress()
}

// Generates a new transaction from a WIF, list of UTXOs, receiver, & amount.
function createTransaction (wif, utxos, receiver, amount, network) {
  if (!validateNetwork(network)) {
    throw new Error('Invalid network choice')
  }

  if (!validateWIF(wif)) {
    throw new Error('Invalid WIF key')
  }

  var key = new zcash.PrivateKey(wif, network)

  var transaction = new zcash.Transaction()
  utxos.forEach(function (utxo) {
    transaction = transaction.from(utxo)
  })

  return transaction.to(receiver, amount).sign(key)
}

module.exports = {
  createWIF: createWIF,
  convertWIFToPublicKey: convertWIFToPublicKey,
  convertWIFToAddress: convertWIFToAddress,
  createTransaction: createTransaction
}
