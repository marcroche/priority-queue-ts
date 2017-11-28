import * as _ from 'lodash';
import { QueueItem } from './queueItem';
import { QueueType } from './queueType';

export class PriorityQueue {
    private items = Array<QueueItem>();
    private queueType: QueueType;
    
    constructor(type = QueueType.Min, items = new Array<QueueItem>()) {
        if (items !== undefined && items.length > 0) {
            this.queueType = type;
            this.items = items;

            if (this.queueType === QueueType.Min) {
                this.buildMinHeap(this.items, this.items.length - 1);
            } else {
                this.buildMaxHeap(this.items, this.items.length - 1);
            }
        }
    }

    public peek() {
        if (this.items.length < 1) {
            return undefined;
        }
        return this.items[0];
    }

    public pop() {
        if (this.items.length < 1) {
            return undefined;
        }

        let first = this.items[0];
        this.items[0] = this.items[this.items.length - 1];
        this.items.splice(this.items.length - 1, 1);

        if (this.queueType === QueueType.Min) {
            this.minHeapify(this.items, 0, this.items.length - 1);
        } else {
            this.maxHeapify(this.items, 0, this.items.length - 1);
        }
        
        return first;
    }

    public push(item: QueueItem) {
        this.items.push(item);
        item.heapIndex = this.items.length - 1;
        this.heapDecreaseKey(this.items, item.heapIndex, item);
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

    public clear() {
        this.items = [];
    }

    // TODO: should this be public
    public decreaseKey(i: number, key: any) {
        this.heapDecreaseKey(this.items, i, key);
    }
    
    // TODO: should this be public
    public increaseKey(i: number, key: any) {
        this.heapIncreaseKey(this.items, i, key);
    }

    // TODO: this is busted
    public contains(key: any) {
        return _.find(this.items, {key: key}) !== undefined;  
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

    private maxHeapify(A: any, i: number, size: number): void {
        let left = 2 * i;
        let right = 2 * i  + 1;
        let largest;

        if (left <= size && (<QueueItem>A[left]).value > (<QueueItem>A[i]).value) {
            largest = left;
        } else {
            largest = i; 
        } 

        if (right <= size && (<QueueItem>A[right]).value > (<QueueItem>A[largest]).value) {
            largest = right; 
        }

        if (largest !== i ) {
            let tmp = A[i];
            A[i] = A[largest];
            A[largest] = tmp;

            this.maxHeapify(A, largest, size);
        } 
    }

    private buildMinHeap(A: any, size: number) {
        for (let i = Math.floor(size / 2); i >= 0; i--) { 
            this.minHeapify(A, i, size); 
        }
    }

    private buildMaxHeap(A: any, size: number) {
        for (let i = Math.floor(size / 2); i >= 0; i--) { 
            this.maxHeapify(A, i, size); 
        }
    }

    private heapDecreaseKey(A: any, i: any, key: any) {
        while (i > 0 && (<QueueItem>A[this.parent(i)]).value > (<QueueItem>A[i]).value) {
            let tmp = A[i];
            A[i] = A[this.parent(i)];
            A[i].heapIndex = i;
            A[this.parent(i)] = tmp;
            A[this.parent(i)].heapIndex = this.parent(i);
            i = this.parent(i);
        }
    }

    private heapIncreaseKey(A: any, i: any, key: any) {
        while (i > 0 && (<QueueItem>A[this.parent(i)]).value < (<QueueItem>A[i]).value) {
            let tmp = A[i];
            A[i] = A[this.parent(i)];
            A[i].heapIndex = i;
            A[this.parent(i)] = tmp;
            A[this.parent(i)].heapIndex = this.parent(i);
            i = this.parent(i);
        }
    }
}
