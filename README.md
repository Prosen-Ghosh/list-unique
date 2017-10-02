# list-unique
JavaScript Package for Creating an array without duplicates

![npm](https://img.shields.io/npm/v/list-unique.svg) ![license](https://img.shields.io/npm/l/list-unique.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/list-unique.svg)



![nodei.co](https://nodei.co/npm/list-unique.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/list-unique.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/list-unique.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/list-unique.svg)

## Features


## [`npm`] Install

`npm install --save list-unique`

## Script tag

#### For Production
```js
<script src="https://cdn.rawgit.com/Prosen-Ghosh/list-unique/a03abce7/unique.js"></script>
```
#### For Development
```js
<script src="https://rawgit.com/Prosen-Ghosh/list-unique/master/unique.js"></script>
```

## Development Dependencies

Package | Version | Dev
--- |:---:|:---:
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^3.5.3 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔

#Usage

```js
const list = require('list-unique');

list.unique([1,2,3,6,4,1,1,2,]);
//=> [ 1, 2, 3, 6, 4 ]

list.intersection([1,2,1,3],[1,2,2,5,4,6,2])
//=> [ 1, 2 ]

list.diff([1,2,1,3],[1,2,2,,2])
//=> [ 3 ]
```

## Author

Prosen Ghosh <prosenghosh25@gmail.com>

## License

 - **MIT** : http://opensource.org/licenses/MIT
