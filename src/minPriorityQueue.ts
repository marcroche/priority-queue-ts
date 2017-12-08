import { QueueItem } from './queueItem';
import { QueueBase } from './queueBase';

export class MinPriorityQueue extends QueueBase {

    public decreaseKey(i: any, value: number) {
        this.items[i].value = value;
        
        while (i > 0 && (<QueueItem>this.items[this.parent(i)]).value > (<QueueItem>this.items[i]).value) {
            let tmp = this.items[i];
            this.items[i] = this.items[this.parent(i)];
            this.items[i].heapIndex = i;
            this.items[this.parent(i)] = tmp;
            this.items[this.parent(i)].heapIndex = this.parent(i);
            i = this.parent(i);
        }
    }

    public push(item: QueueItem) {
        this.items.push(item);
        item.heapIndex = this.items.length - 1;
       
        this.decreaseKey(item.heapIndex, item.value);
    }

    protected heapify(A: any, i: number, size: number): void {
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

            this.heapify(A, smallest, size);
        }
    }
}
