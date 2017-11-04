import { PriorityQueue } from '../src/PriorityQueue';
import { QueueItem } from '../src/queueItem';
import { expect } from 'chai';
import 'mocha';

describe('PriorityQueue', () => {
    it('should create a PriorityQueue', () => {
        const result = new PriorityQueue([{ value: 0, item: {}, heapIndex: 0 }]);
        expect(typeof result).to.equal('object');
    });
});
