# NoFrameNet-Core
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]
[![FrameNet][framenet-image]][framenet-url]

A set of core Mongoose models and utils for handling FrameNet data on a MongoDB database.

## Install
```shell
$ npm install --save noframenet-core
```

## Use
Using ES6 `import`
```javascript
import { Frame } from 'noframenet-core';

const frame = new Frame();
```
## Models
`Number` vs. `mongoose.Schema.Types.ObjectId`

Indexes

## Utils



[npm-version-image]:https://img.shields.io/npm/v/noframenet-core.svg?style=flat-square

[npm-downloads-image]:https://img.shields.io/npm/dt/noframenet-core.svg?style=flat-square

[npm-url]:https://www.npmjs.com/package/noframenet-core

[framenet-image]:https://img.shields.io/badge/framenet-1.6-blue.svg?style=flat-square
[framenet-url]:https://framenet.icsi.berkeley.edu/fndrupal
[license-image]:http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE.txt
