import { PriorityQueue } from '../src/priorityQueue';
import { QueueItem } from '../src/queueItem';
import { QueueType } from '../src/queueType';
import * as testData from './testData';
import { expect } from 'chai';
import 'mocha';

describe('Min-PriorityQueue', () => {
    it('should create a PriorityQueue', () => {
        const result = new PriorityQueue(QueueType.Min, [{ 
            value: 0, 
            item: {}, 
            heapIndex: 0 
        }]);
        expect(typeof result).to.equal('object');
    });

    it('should not be empty when creating with array', () => {
        const result = new PriorityQueue(QueueType.Min, testData.getQueueItemArray());
        expect(result.isEmpty()).to.equal(false);
    });

    it('should be empty when creating with empty constructor', () => {
        const result = new PriorityQueue();
        expect(result.isEmpty()).to.equal(true);
    });

    it('should clear items', () => {
        const result = new PriorityQueue(QueueType.Min, testData.getQueueItemArray());
        expect(result.isEmpty()).to.equal(false);
        result.clear();
        expect(result.isEmpty()).to.equal(true);
    });

    it('should pop items', () => {
        const result = new PriorityQueue(QueueType.Min, testData.getQueueItemArray());
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

    it('should pop undefined when no items', () => {
        const result = new PriorityQueue();
        let pop = result.pop();
        expect(pop).to.equal(undefined);
    });

    it('should peek top item', () => {
        const result = new PriorityQueue(QueueType.Min, testData.getQueueItemArray());
        let peek = result.peek();
        expect(peek.value).to.equal(1);
        peek = result.peek();
        expect(peek.value).to.equal(1);
    });

    it('should peek undefined when no items', () => {
        const result = new PriorityQueue();
        let peek = result.peek();
        expect(peek).to.equal(undefined);
    });

    it('should push items onto queue', () => {
        const result = new PriorityQueue();
        let obj5 = { value: 5, label: 'five' };
        let obj1 = { value: 1, label: 'one' };

        result.push(new QueueItem(obj5.value, obj5));
        let peek = result.peek();
        expect(peek.value).to.equal(5);

        result.push(new QueueItem(obj1.value, obj1));
        peek = result.peek();
        expect(peek.value).to.equal(1);
    });

    it('should clear queue', () => {
        const result = new PriorityQueue(QueueType.Min, testData.getQueueItemArray());
        expect(result.isEmpty()).to.equal(false);
        result.clear();
        expect(result.isEmpty()).to.equal(true);
    });

    it('should give a dump of queue items', () => {
        const result = new PriorityQueue();
        let obj = { value: 1, label: 'object' };
        result.push(new QueueItem(obj.value, obj));

        let dump = result.dump();
        expect(result.dump())
            .to.
            equal('0: {\"value\":1,\"item\":{\"value\":1,\"label\":\"object\"},\"heapIndex\":0}');

        result.pop();
        expect(result.dump())
            .to.
            equal('');
    });
});
