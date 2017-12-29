const test = require('tape')
const zcash = require('../index')

// Generated using zcashd v1.0.14-RC1.
const mainnetTAddresses = [
  {
    network: 'mainnet',
    key: 'L3FFKs3hLRByoAkyHLaocvteYBxTmiWk9CFAMq8YmF6oj1UzfkmF',
    address: 't1Qu2mQ1SGDvpQg1zXc5FXQK3kTwMtqVrab'
  },
  {
    network: 'mainnet',
    key: 'KyxWVXCJHyM2dbtqoxsumQe9NZ4LLCrUxwrxZ131XiYFeb2ZvoQR',
    address: 't1XubKVFVgcGUzE8j2gwNDY6hbt3G2ECty7'
  }
]

// Generated using zcashd v1.0.14-RC1.
const mainnetZAddresses = [
  {
    network: 'mainnet',
    spendingKey: 'SKxss2BvgfLjKCmrWNdGdG3B9ZHhQf2L1kGsQB34uykWeYRHgaDN',
    viewingKey: 'ZiVKcXfY5nvfyuijKM3UyqnXx5ymCnp7ndgcTg1je5fJutsYxKiUousgH4TP2vY2pMBK594X91vdiFH8gR41gTjutR1ycsuzW',
    address: 'zcNStB2sLnxPUTsg6aCSSQFdutcrp1a816m848ngoYLUa6kRTC3uZMWAhHnCU6bPtYyYGSw4HFFgDS2u6pwv41cx8BBgy8u'
  },
  {
    network: 'mainnet',
    spendingKey: 'SKxtYkM8R8X8eAvKJLyckV5Gero9SaHMDDSq3Z54opLi3NjPJZCq',
    viewingKey: 'ZiVKsSgutqkoyzZi1MvWvBwNYFdKsUGBdQ3pCNFS1SebacucPqmaJvMYLgBU3c3ybMa1FFeVsCmZnQB743vF2wk93AHQrWVcB',
    address: 'zcdMuYqvAvxUKSZgyc8nbEqoZTHYG5QtNJVpHqA3nq1CcAiWo2QNTMBQoAXcD64AAhF39KdLkNP61xw9Afw2GFq5nHpQE7n'
  },
  {
    network: 'mainnet',
    spendingKey: 'SKxsPUTCPExBhPo9aBXXDpnwq2B53dD6rMAZuHRSpGA89mvvDoZ5',
    viewingKey: 'ZiVKYjyTf7Zu7mQs2gnvXy8NRm9orGZTdtNGV2usUuxRNzcP6AwcQRXppYbEW8sGUxv6DQ9CXjMKubk7nA7EmZdgkaSuTCvas',
    address: 'zcJfC6cBz26FAbb1r1kZnEjK5wGLZMRNgknUxGdX6eoaJuu8JNFDi4avFQG5a8vMCgJyr6V8wP5kumvrwcqwxPJytTSAo36'
  }
]

mainnetTAddresses.forEach(function (pair, index) {
  test('generateAddressFromWIF' + index, function (t) {
    const address = zcash.generateAddressFromWIF(pair.key, pair.network)
    t.equal(address, pair.address)
    t.end()
  })
})

mainnetZAddresses.forEach(function (pair, index) {
  test('generateViewingKeyFromSpendingKey' + index, function (t) {
    const viewingKey = zcash.generateViewingKeyFromSpendingKey(pair.spendingKey, pair.network)
    t.equal(viewingKey, pair.viewingKey)
    t.end()
  })

  test('generateAddressFromSpendingKey' + index, function (t) {
    const address = zcash.generateAddressFromSpendingKey(pair.spendingKey, pair.network)
    t.equal(address.slice(0, 2), 'zc')
    t.equal(address, pair.address)
    t.end()
  })
})

test('generateAddressFromWIF', function (t) {
  const mainnetWIF = zcash.generateWIF('mainnet')
  const mainnetAddress = zcash.generateAddressFromWIF(mainnetWIF, 'mainnet')
  t.equal(mainnetAddress.slice(0, 2), 't1')

  const testnetWIF = zcash.generateWIF('testnet')
  const testnetAddress = zcash.generateAddressFromWIF(testnetWIF, 'testnet')
  t.equal(testnetAddress.slice(0, 2), 'tm')
  t.end()
})

test('generateSpendingKey', function (t) {
  const mainnetSpendingKey = zcash.generateSpendingKey('mainnet')
  t.equal(mainnetSpendingKey.slice(0, 2), 'SK')

  const testnetSpendingKey = zcash.generateSpendingKey('testnet')
  t.equal(testnetSpendingKey.slice(0, 2), 'ST')
  t.end()
})

test('generateViewingKeyFromSpendingKey', function (t) {
  const mainnetSpendingKey = zcash.generateSpendingKey('mainnet')
  const mainnetViewingKey = zcash.generateViewingKeyFromSpendingKey(mainnetSpendingKey, 'mainnet')
  t.equal(mainnetViewingKey.slice(0, 4), 'ZiVK')

  const testnetSpendingKey = zcash.generateSpendingKey('testnet')
  const testnetViewingKey = zcash.generateViewingKeyFromSpendingKey(testnetSpendingKey, 'testnet')
  t.equal(testnetViewingKey.slice(0, 4), 'ZiVt')
  t.end()
})

test('generateAddressFromSpendingKey', function (t) {
  const mainnetSpendingKey = zcash.generateSpendingKey('mainnet')
  const mainnetAddress = zcash.generateAddressFromSpendingKey(mainnetSpendingKey, 'mainnet')
  t.equal(mainnetAddress.slice(0, 2), 'zc')

  const testnetSpendingKey = zcash.generateSpendingKey('testnet')
  const testnetAddress = zcash.generateAddressFromSpendingKey(testnetSpendingKey, 'testnet')
  t.equal(testnetAddress.slice(0, 2), 'zt')
  t.end()
})

test('generateZAddress', function (t) {
  const mainnetWallet = zcash.generateZAddress('mainnet')
  t.equal(mainnetWallet.spendingKey.slice(0, 2), 'SK')
  t.equal(mainnetWallet.address.slice(0, 2), 'zc')

  const testnetWallet = zcash.generateZAddress('testnet')
  t.equal(testnetWallet.spendingKey.slice(0, 2), 'ST')
  t.equal(testnetWallet.address.slice(0, 2), 'zt')
  t.end()
})

test('generateTransparentTransaction', function (t) {
  const wif = 'L3FFKs3hLRByoAkyHLaocvteYBxTmiWk9CFAMq8YmF6oj1UzfkmF'
  const utxos = [{
    'txId': '115e8f72f39fad874cfab0deed11a80f24f967a84079fb56ddf53ea02e308986',
    'outputIndex': 0,
    'address': 't1XubKVFVgcGUzE8j2gwNDY6hbt3G2ECty7',
    'script': '76a91447862fe165e6121af80d5dde1ecb478ed170565b88ac',
    'satoshis': 50000
  }]

  const mainnetTransaction = zcash.generateTransparentTransaction(wif, utxos, 't1XubKVFVgcGUzE8j2gwNDY6hbt3G2ECty7', 15000, 'mainnet').toString()
  console.log(mainnetTransaction)
  t.end()
})
