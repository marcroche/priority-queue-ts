import { PriorityQueue } from '../src/PriorityQueue';
import { QueueItem } from '../src/queueItem';
import * as testData from './testData';
import { expect } from 'chai';
import 'mocha';

describe('PriorityQueue', () => {
    it('should create a PriorityQueue', () => {
        const result = new PriorityQueue([{ value: 0, item: {}, heapIndex: 0 }]);
        expect(typeof result).to.equal('object');
    });

    it('should not be empty when creating with array', () => {
        const result = new PriorityQueue(testData.getQueueItemArray());
        expect(result.isEmpty()).to.equal(false);
    });

    it('should be empty when creating with empty constructor', () => {
        const result = new PriorityQueue();
        expect(result.isEmpty()).to.equal(true);
    });

    it('should clear items', () => {
        const result = new PriorityQueue(testData.getQueueItemArray());
        expect(result.isEmpty()).to.equal(false);
        result.clear();
        expect(result.isEmpty()).to.equal(true);
    });

    it('should pop items', () => {
        const result = new PriorityQueue(testData.getQueueItemArray());
        let pop = result.pop();
        expect(pop.value).to.equal(1);
        pop = result.pop();
        expect(pop.value).to.equal(2);
        pop = result.pop();
        expect(pop.value).to.equal(3);
        pop = result.pop();
        expect(pop.value).to.equal(4);
        pop = result.pop();
        expect(pop.value).to.equal(5);
    });

    it('should peek top item', () => {
        const result = new PriorityQueue(testData.getQueueItemArray());
        let peek = result.peek();
        expect(peek.value).to.equal(1);
        peek = result.peek();
        expect(peek.value).to.equal(1);
    });

    it('should push items onto queue', () => {
        const result = new PriorityQueue();
        let obj5 = { value: 5, label: 'five'};
        let obj1 = { value: 1, label: 'one'};

        result.push(new QueueItem(obj5.value, obj5));
        let peek = result.peek();
        expect(peek.value).to.equal(5);

        result.push(new QueueItem(obj1.value, obj1));
        peek = result.peek();
        expect(peek.value).to.equal(1);
    });

    it('should clear queue', () => {
        const result = new PriorityQueue(testData.getQueueItemArray());
        expect(result.isEmpty()).to.equal(false);
        result.clear();
        expect(result.isEmpty()).to.equal(true);
    });
});
