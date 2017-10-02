# list-unique
JavaScript Package for Creating an array without duplicates

![npm](https://img.shields.io/npm/v/list-unique.svg) ![license](https://img.shields.io/npm/l/list-unique.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/list-unique.svg)



![nodei.co](https://nodei.co/npm/list-unique.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/list-unique.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/list-unique.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/list-unique.svg)

## Features


## `npm` Install

`npm install --save list-unique`

## Script tag

#### For Production
```js
<script src="https://cdn.rawgit.com/Prosen-Ghosh/list-unique/a10489e4/unique.js"></script>
```
#### For Development
```js
<script src="https://rawgit.com/Prosen-Ghosh/list-unique/master/unique.js"></script>
```

## Usage

```js
const list = require('list-unique');

list.unique([1,2,3,6,4,1,1,2,]);
//=> [ 1, 2, 3, 6, 4 ]

list.union([1,2],[3,4,5])
//=> [ 1, 2, 3, 4, 5 ]

list.intersection([1,2,1,3],[1,2,2,5,4,6,2]);
//=> [ 1, 2 ]

list.diff([1,2,1,3],[1,2,2,,2]);
//=> [ 3 ]

list.unique(["foo","bar","baz","foo","baz"]);
//=> [ 'foo', 'bar', 'baz' ]

list.union(["foo","bar"],["baz","bar"]);
//=> [ 'foo', 'bar', 'baz' ]

list.diff(["foo","bar","baz","foo","baz"],["foo","bar","baz","foo","baz"])
//=> []

list.intersection(["foo","bar","baz","foo","baz","bob"],["foo","bar","foo"]);
//=> [ 'foo', 'bar' ]

list.diff();
//=> []

list.intersection();
//=> []

list.unique();
//=> []

list.union()
//=> []

```

## Author

Prosen Ghosh <prosenghosh25@gmail.com>

## License

 - **MIT** : http://opensource.org/licenses/MIT
