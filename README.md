# NoFrameNet-Core
A set of core Mongoose models and utils for handling FrameNet data on a MongoDB database.

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![Dependencies][david-dep-image]][david-url]
[![MIT License][license-image]][license-url]
[![FrameNet][framenet-image]][framenet-url]

If you are looking for a solution to import FrameNet data to a MongoDB database, check out [NoFrameNet](https://github.com/akb89/noframenet)

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

- When ids are specified in FrameNet XML data, models rely on an encoded `Number` id with a unique index:
```
_id: {
  type: Number,
  unique: true,
}
```
- When ids are not specified in the XML data, models use the default `mongoose.Schema.Types.ObjectId` created on the fly by Mongoose and hence not encoded in the model

## Utils
NoFrameNet-Core's `Set` extends collectionjs' [FastSet](http://www.collectionsjs.com/fast-set) and defines a custom equals method. Objects are compared by their ids, using:
- Mongoose ObjectId `.equals()` method if ids are instances of `mongoose.Types.ObjectId`;
- standard `===` if ids are instances of `Number`.

## FrameNet Version Compatibility
NoFrameNet-Core models are compatible with FrameNet version:
- 1.5
- 1.6
- 1.7

[npm-version-image]:https://img.shields.io/npm/v/noframenet-core.svg?style=flat-square
[npm-downloads-image]:https://img.shields.io/npm/dt/noframenet-core.svg?style=flat-square
[npm-url]:https://www.npmjs.com/package/noframenet-core
[framenet-image]:https://img.shields.io/badge/FrameNet-%3E%3D1.5-blue.svg?style=flat-square
[framenet-url]:https://framenet.icsi.berkeley.edu/fndrupal
[license-image]:http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE.txt
[david-dep-image]: https://david-dm.org/akb89/noframenet-core.svg?style=flat-square
[david-url]: https://david-dm.org/akb89/noframenet-core
