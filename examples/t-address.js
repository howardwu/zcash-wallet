const zcash = require('../index')

const tAddress = zcash.generateTAddress('mainnet')
console.log('Transparent mainnet address\n', tAddress)

// Advanced options

const tAddressMainnetCompressed = zcash.generateTAddress('mainnet', true)
console.log('\nTransparent mainnet address (compressed)\n', tAddressMainnetCompressed)

const tAddressMainnetUncompressed = zcash.generateTAddress('mainnet', false)
console.log('\nTransparent mainnet address (uncompressed)\n', tAddressMainnetUncompressed)

const tAddressTestnetCompressed = zcash.generateTAddress('testnet', true)
console.log('\nTransparent testnet address (compressed)\n', tAddressTestnetCompressed)

const tAddressTestnetUncompressed = zcash.generateTAddress('testnet', false)
console.log('\nTransparent testnet address (uncompressed)\n', tAddressTestnetUncompressed)
