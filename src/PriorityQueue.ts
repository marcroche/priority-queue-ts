import * as _ from 'lodash';

export class PriorityQueue {
    private array = Array<any>();
    private keyFieldName: string;
    private valueFieldName: string;
    constructor(_keyFieldName: any, _valueFieldName: any, _array: any) {
        this.keyFieldName = _keyFieldName;
        this.valueFieldName = _valueFieldName;

        if (_array !== undefined && _array.length > 0) {
            this.array = _array;
            this.buildMinHeap(this.array, this.array.length - 1);
        }
    }

    public peek() {
        if (this.array.length < 1) {
            throw 'peek(): Heap has no elements';
        }
        return this.array[0][this.valueFieldName];
    }

    public pop() {
        if (this.array.length < 1) {
            throw 'pop(): Heap has no elements';
        }

        let min = this.array[0];
        this.array[0] = this.array[this.array.length - 1];
        this.array.splice(this.array.length - 1, 1);

        this.minHeapify(this.array, 0, this.array.length - 1);

        return min;
    }

    public push(value: any) {
        this.array.push(value);
        value.heapIndex = this.array.length - 1;
        this.heapDecreaseKey(this.array, value.heapIndex, value);
    }

    public dump() {
        let dump = [];
        for (let i = 0; i < this.array.length; i++) {
            dump.push(i + ': ' + this.array[i]);
        }
        return dump.join(', ');
    }

    public isEmpty() {
        return this.array.length === 0;
    }

    public contains(key: any) {
        return _.find(this.array, {key: key}) !== undefined;  
    }

    public clear() {
        this.array = [];
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

    private minHeapify(A: any, i: number, size: number) {
        let left = this.leftChild(i);
        let right = this.rightChild(i);
        let smallest;

        if (left <= size && A[left][this.valueFieldName] < A[i][this.valueFieldName]) {
            smallest = left; 
        } else {
            smallest = i; 
        }

        if (right <= size && A[right][this.valueFieldName] < A[smallest][this.valueFieldName]) {
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
        this.heapDecreaseKey(this.array, i, key);
    }

    private heapDecreaseKey(A: any, i: any, key: any) {
        while (i > 0 && A[this.parent(i)][this.valueFieldName] > A[i][this.valueFieldName]) {
            let tmp = A[i];
            A[i] = A[this.parent(i)];
            A[i].heapInded = i;
            A[this.parent(i)] = tmp;
            A[this.parent(i)].heapIndex = this.parent(i);
            i = this.parent(i);
        }
    }
}
