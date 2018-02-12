import { QueueItem } from './queueItem';

export abstract class QueueBase {

    protected items = Array<QueueItem>();
    
    constructor(items = new Array<QueueItem>()) {
        if (items !== undefined && items.length > 0) {
            this.items = items;

            this.buildHeap(this.items, this.items.length - 1);
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

        this.heapify(this.items, 0, this.items.length - 1);

        return first;
    }

    public dump() {
        let dump = [];
        for (let i = 0; i < this.items.length; i++) {
            dump.push(i + ': ' + JSON.stringify(this.items[i]));
        }
        return dump.join(', ');
    }

    public contains(id: string): boolean {
        let item = this.items.find((i) => {
            return i.id === id;
        });
        if (item === undefined) { 
            return false; 
        } else { 
            return true; 
        }
    }

    public isEmpty() {
        return this.items.length === 0;
    }

    public clear() {
        this.items = [];
    }
    
    public size() {
        return this.items.length;
    }

    protected abstract heapify(A: Array<QueueItem>, i: number, size: number): void;
    
    protected leftChild(i: number): number {
        return 2 * i + 1;
    }

    protected rightChild(i: number): number {
        return 2 * i + 2;
    }

    protected parent(i: number): number {
        return Math.floor(i / 2); 
    }

    private buildHeap(A: Array<QueueItem>, size: number) {
        for (let i = Math.floor(size / 2); i >= 0; i--) { 
            this.heapify(A, i, size); 
        }
    }
}
