import { QueueItem } from './queueItem';
import { QueueBase } from './queueBase';

export class MaxPriorityQueue extends QueueBase {

    public push(item: QueueItem) {
        this.items.push(item);
        item.heapIndex = this.items.length - 1;
       
        this.increaseKey(this.items, item.heapIndex, item);
    }

    protected heapify(A: any, i: number, size: number): void {
        let left = this.leftChild(i);
        let right = this.rightChild(i);
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

            this.heapify(A, largest, size);
        } 
    }

    private increaseKey(A: any, i: any, key: any) {
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
