import { QueueItem } from '../src/queueItem';

let objectArray = new Array<any>();
objectArray.push({ value: 5, label: 'five', heapIndex: 0 });
objectArray.push({ value: 4, label: 'four', heapIndex: 0 });
objectArray.push({ value: 3, label: 'three', heapIndex: 0 });
objectArray.push({ value: 2, label: 'two', heapIndex: 0 });
objectArray.push({ value: 1, label: 'one', heapIndex: 0 });

export function getQueueItemArray() {
    let queueItemArray = new Array<QueueItem>();
    queueItemArray.push(objectArray[0]);
    queueItemArray.push(objectArray[1]);
    queueItemArray.push(objectArray[2]);
    queueItemArray.push(objectArray[3]);
    queueItemArray.push(objectArray[4]);
    return queueItemArray;
}
