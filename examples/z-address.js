const zcash = require('../index')

const zAddressMainnet = zcash.generateTAddress('mainnet')
console.log('Shielded mainnet address\n', zAddressMainnet)

const zAddressTestnet = zcash.generateTAddress('testnet')
console.log('\nShielded testnet address\n', zAddressTestnet)
