import { MaxPriorityQueue } from '../src/maxPriorityQueue';
import { QueueItem } from '../src/queueItem';
import * as testData from './testData';
import { expect } from 'chai';
import 'mocha';

describe('Max-PriorityQueue', () => {
    it('should create a Max PriorityQueue', () => {
        const result = new MaxPriorityQueue([{ 
            value: 0, 
            heapIndex: 0,
            id: '123'
        }]);
        expect(typeof result).to.equal('object');
    });

    it('should not be empty when creating with array', () => {
        const result = new MaxPriorityQueue(testData.getQueueItemArray());
        expect(result.isEmpty()).to.equal(false);
    });

    it('should be empty when creating with empty constructor', () => {
        const result = new MaxPriorityQueue();
        expect(result.isEmpty()).to.equal(true);
    });

    it('should clear items', () => {
        const result = new MaxPriorityQueue(testData.getQueueItemArray());
        expect(result.isEmpty()).to.equal(false);
        result.clear();
        expect(result.isEmpty()).to.equal(true);
    });

    it('should pop items', () => {
        const result = new MaxPriorityQueue(testData.getQueueItemArray());
        let pop = result.pop();
        expect(pop.value).to.equal(5);
        pop = result.pop();
        expect(pop.value).to.equal(4);
        pop = result.pop();
        expect(pop.value).to.equal(3);
        pop = result.pop();
        expect(pop.value).to.equal(2);
        pop = result.pop();
        expect(pop.value).to.equal(1);
    });

    it('should pop undefined when no items', () => {
        const result = new MaxPriorityQueue();
        let pop = result.pop();
        expect(pop).to.equal(undefined);
    });

    it('should peek top item', () => {
        const result = new MaxPriorityQueue(testData.getQueueItemArray());
        let peek = result.peek();
        expect(peek.value).to.equal(5);
        peek = result.peek();
        expect(peek.value).to.equal(5);
    });

    it('should peek undefined when no items', () => {
        const result = new MaxPriorityQueue();
        let peek = result.peek();
        expect(peek).to.equal(undefined);
    });

    it('should push items onto queue', () => {
        const result = new MaxPriorityQueue();
        let obj5 = { value: 5, label: 'five', heapIndex: 0, id: '5' };
        let obj1 = { value: 1, label: 'one', heapIndex: 0, id: '1' };

        result.push(obj5);
        let peek = result.peek();
        expect(peek.value).to.equal(5);

        result.push(obj1);
        peek = result.peek();
        expect(peek.value).to.equal(5);
    });

    it('should clear queue', () => {
        const result = new MaxPriorityQueue(testData.getQueueItemArray());
        expect(result.isEmpty()).to.equal(false);
        result.clear();
        expect(result.isEmpty()).to.equal(true);
    });

    it('should give a dump of queue items', () => {
        const result = new MaxPriorityQueue();
        let obj = { value: 1, label: 'object', heapIndex: 0, id: '1' };
        result.push(obj);

        let dump = result.dump();
        expect(result.dump())
            .to.
            equal('0: {\"value\":1,\"label\":\"object\",\"heapIndex\":0,\"id\":\"1\"}');

        result.pop();
        expect(result.dump())
            .to.
            equal('');
    });


    // it('should dumperoo', () => {
    //     const result = new MaxPriorityQueue();
    //     let obj0 = { value: 0, label: 'zero' };
    //     let obj1 = { value: 1, label: 'one' };
    //     let obj2 = { value: 2, label: 'two' };
    //     let obj3 = { value: 3, label: 'three' };
    //     let obj4 = { value: 4, label: 'four' };
    //     let obj5 = { value: 5, label: 'five' };
    //     let obj6 = { value: 6, label: 'six' };

    //     result.push(new QueueItem(obj0.value, obj0));
    //     result.push(new QueueItem(obj1.value, obj1));
    //     result.push(new QueueItem(obj2.value, obj2));
    //     result.push(new QueueItem(obj3.value, obj3));
    //     result.push(new QueueItem(obj4.value, obj4));
    //     result.push(new QueueItem(obj5.value, obj5));
    //     result.push(new QueueItem(obj6.value, obj6));
    //     console.log(result.dump());
    // });

    // it('should construct-roo', () => {

    //     let o1 = { value: 1, label: '1' };
    //     let o2 = { value: 2, label: '2' };
    //     let o3 = { value: 3, label: '3' };
    //     let o7 = { value: 7, label: '7' };
    //     let o17 = { value: 17, label: '17' };
    //     let o19 = { value: 19, label: '19' };
    //     let o25 = { value: 25, label: '25' };
    //     let o36 = { value: 36, label: '36' };
    //     let o100 = { value: 100, label: '100' };

    //     const result = new MaxPriorityQueue([
    //         new QueueItem(o1.value, o1),
    //         new QueueItem(o2.value, o2),
    //         new QueueItem(o3.value, o3),
    //         new QueueItem(o7.value, o7),
    //         new QueueItem(o17.value, o17),
    //         new QueueItem(o19.value, o19),
    //         new QueueItem(o25.value, o25),
    //         new QueueItem(o36.value, o36),
    //         new QueueItem(o100.value, o100)
    //     ]);

    //     console.log(result.dump());
    // });
});
