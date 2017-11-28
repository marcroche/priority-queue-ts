# priority-queue-ts

[![Build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![NPM downloads][downloads-image]][downloads-url]
[![License][license-image]][license-url]

A simple priority queue data structure for Node.js and the browser written in TypeScript.

## Installation

As component for the browser:

```
$ component install marcroche/priority-queue-ts
```

As npm for Node.js:

```
$ npm install priority-queue-ts
```

If you just want a pre-built file for using in the web, check the [releases](
https://github.com/marcroche/priority-queue-ts/releases) section.

## Example

```ts
import { 
    PriorityQueue, 
    QueueType, 
    QueueItem } from 'priority-queue-ts';

let item = {
    value: 1, label: 'one'
};

let queue = new PriorityQueue(QueueType.Min);

queue.push(new QueueItem(item.value, item));
```

## Licence

MIT

[npm-image]: https://img.shields.io/npm/v/priority-queue-ts.svg?style=flat
[npm-url]: https://npmjs.org/package/priority-queue-ts
[downloads-image]: https://img.shields.io/npm/dm/priority-queue-ts.svg?style=flat
[downloads-url]: https://npmjs.org/package/priority-queue-ts
[travis-image]: https://img.shields.io/travis/marcroche/priority-queue-ts.svg?style=flat
[travis-url]: https://travis-ci.org/marcroche/priority-queue-ts
[coveralls-image]: https://img.shields.io/coveralls/marcroche/priority-queue-ts.svg?style=flat
[coveralls-url]: https://coveralls.io/r/marcroche/priority-queue-ts?branch=master
[license-image]: https://img.shields.io/npm/l/priority-queue-ts.svg
[license-url]: https://github.com/marcroche/priority-queue-ts/blob/master/LICENSE.md