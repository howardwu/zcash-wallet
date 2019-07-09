# zcash-wallet

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

A lightweight Javascript library for generating Zcash t-addresses and z-addresses

## Example

``` javascript
const zcash = require('./index')

const taddress = zcash.generateTAddress('mainnet')
// => { key        : 'L3a3yRcYATnZQt7ams14Pe5KCyRzrrCSejDyeQzHXGntToffVH4g',
//      publicKey  : '0310d63f8c2f0a6efd13ce8a77776de26eba1816f73aa73e73a4da3f2368fcc949',
//      address    : 't1JwBjJWgNQVqWxGha2RsPZMhVGgfRg2pod' }

const zaddress = zcash.generateZAddress('mainnet')
// => { spendingKey : 'SKxss2BvgfLjKCmrWNdGdG3B9ZHhQf2L1kGsQB34uykWeYRHgaDN',
//      viewingKey  : 'ZiVKcXfY5nvfyuijKM3UyqnXx5ymCnp7ndgcTg1je5fJutsYxKiUousgH4TP2vY2pMBK594X91vdiFH8gR41gTjutR1ycsuzW',
//      address     : 'zcNStB2sLnxPUTsg6aCSSQFdutcrp1a816m848ngoYLUa6kRTC3uZMWAhHnCU6bPtYyYGSw4HFFgDS2u6pwv41cx8BBgy8u' }
```

## License

[MIT License](LICENSE)
