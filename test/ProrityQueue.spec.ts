import { PriorityQueue } from '../src/PriorityQueue';
import { QueueItem } from '../src/queueItem';
import * as testData from './data';
import { expect } from 'chai';
import 'mocha';

describe('PriorityQueue', () => {
    it('should create a PriorityQueue', () => {
        const result = new PriorityQueue([{ value: 0, item: {}, heapIndex: 0 }]);
        expect(typeof result).to.equal('object');
    });

    it('should not be empty when creating with array', () => {
        const result = new PriorityQueue(testData.queueItemArray);
        expect(result.isEmpty()).to.equal(false);
    });

    it('should be empty when creating with empty constructor', () => {
        const result = new PriorityQueue();
        expect(result.isEmpty()).to.equal(true);
    });

    it('should clear items', () => {
        const result = new PriorityQueue(testData.queueItemArray);
        expect(result.isEmpty()).to.equal(false);
        result.clear();
        expect(result.isEmpty()).to.equal(true);
    });
});
