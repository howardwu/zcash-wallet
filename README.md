# zcash-wallet

[![TRAVIS](https://secure.travis-ci.org/howardwu/zaddr.png)](http://travis-ci.org/howardwu/zaddr)
[![NPM](http://img.shields.io/npm/v/zaddr.svg)](https://www.npmjs.org/package/zaddr)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

A lightweight Javascript library for generating Zcash t-addresses and z-addresses

## Example

``` javascript
const zcash = require('./index')

const wallet = zcash.generateWallet('mainnet')
// => { spendingKey : 'SKxss2BvgfLjKCmrWNdGdG3B9ZHhQf2L1kGsQB34uykWeYRHgaDN',
//      viewingKey  : 'ZiVKcXfY5nvfyuijKM3UyqnXx5ymCnp7ndgcTg1je5fJutsYxKiUousgH4TP2vY2pMBK594X91vdiFH8gR41gTjutR1ycsuzW',
//      address     : 'zcNStB2sLnxPUTsg6aCSSQFdutcrp1a816m848ngoYLUa6kRTC3uZMWAhHnCU6bPtYyYGSw4HFFgDS2u6pwv41cx8BBgy8u' }
```

## License

[MIT License](LICENSE)
