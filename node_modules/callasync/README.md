# callasync

[![npm version](https://badge.fury.io/js/callasync.svg)](https://badge.fury.io/js/callasync)
[![Build Status](https://travis-ci.org/yefremov/callasync.svg?branch=master)](https://travis-ci.org/yefremov/callasync)
[![Coverage Status](https://coveralls.io/repos/github/yefremov/callasync/badge.svg?branch=master)](https://coveralls.io/github/yefremov/callasync?branch=master)


Essential utility function that groups and calls functions asynchronously on
the same tick respecting order of invocation.

## Installation

```bash
$ npm install --save callasync
```

## API

```js
var callasync = require('callasync');

// both functions `foo()` and `bar()` will be
// called async but on a same tick

callasync(function foo() {
  // function body
});

callasync(function bar() {
  // function body
});
```

## Running tests

```bash
$ npm install
$ npm test
```

## License

[MIT](LICENSE)
