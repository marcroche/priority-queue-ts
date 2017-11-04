import * as _ from 'lodash';
import { QueueItem } from './queueItem';
import * as queueType from './queueType';

export class PriorityQueue {
    private items = Array<QueueItem>();
    
    constructor(items = new Array<QueueItem>()) {
        if (items !== undefined && items.length > 0) {
            this.items = items;
            this.buildMinHeap(this.items, this.items.length - 1);
        }
    }

    public peek() {
        if (this.items.length < 1) {
            throw 'peek(): Heap has no elements';
        }
        return this.items[0];
    }

    public pop() {
        if (this.items.length < 1) {
            throw 'pop(): Heap has no elements';
        }

        let min = this.items[0];
        this.items[0] = this.items[this.items.length - 1];
        this.items.splice(this.items.length - 1, 1);

        this.minHeapify(this.items, 0, this.items.length - 1);

        return min;
    }

    public push(value: QueueItem) {
        this.items.push(value);
        value.heapIndex = this.items.length - 1;
        this.heapDecreaseKey(this.items, value.heapIndex, value);
    }

    public dump() {
        let dump = [];
        for (let i = 0; i < this.items.length; i++) {
            dump.push(i + ': ' + JSON.stringify(this.items[i]));
        }
        return dump.join(', ');
    }

    public isEmpty() {
        return this.items.length === 0;
    }

    // public contains(key: any) {
    //     return _.find(this.items, {key: key}) !== undefined;  
    // }

    public clear() {
        this.items = [];
    }
    
    private leftChild(i: number): number {
        return 2 * i + 1;
    }

    private rightChild(i: number): number {
        return 2 * i + 2;
    }

    private parent(i: number): number {
        return Math.floor(i / 2); 
    }

    private minHeapify(A: any, i: number, size: number): void {
        let left = this.leftChild(i);
        let right = this.rightChild(i);
        let smallest;

        if (left <= size && (<QueueItem>A[left]).value < (<QueueItem>A[i]).value) {
            smallest = left; 
        } else {
            smallest = i; 
        }

        if (right <= size && (<QueueItem>A[right]).value < (<QueueItem>A[smallest]).value) {
            smallest = right; 
        }

        if (smallest !== i) {
            let tmp = A[i];
            A[i] = A[smallest];
            A[smallest] = tmp;

            this.minHeapify(A, smallest, size);
        }
    }

    private buildMinHeap(A: any, size: number) {
        for (let i = Math.floor(size / 2); i >= 0; i--) { 
            this.minHeapify(A, i, size); 
        }
    }

    private decreaseKey(i: any, key: any) {
        this.heapDecreaseKey(this.items, i, key);
    }

    private heapDecreaseKey(A: any, i: any, key: any) {
        while (i > 0 && (<QueueItem>A[this.parent(i)]).value > (<QueueItem>A[i]).value) {
            let tmp = A[i];
            A[i] = A[this.parent(i)];
            A[i].heapInded = i;
            A[this.parent(i)] = tmp;
            A[this.parent(i)].heapIndex = this.parent(i);
            i = this.parent(i);
        }
    }
}
