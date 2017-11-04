import { QueueItem } from '../src/queueItem';

let objectArray = new Array<any>();
objectArray.push({ value: 5, label: 'five'});
objectArray.push({ value: 4, label: 'four'});
objectArray.push({ value: 3, label: 'three'});
objectArray.push({ value: 2, label: 'two'});
objectArray.push({ value: 1, label: 'one'});

export function getQueueItemArray() {
    let queueItemArray = new Array<QueueItem>();
    queueItemArray.push(new QueueItem(objectArray[0].value, objectArray[0]));
    queueItemArray.push(new QueueItem(objectArray[1].value, objectArray[1]));
    queueItemArray.push(new QueueItem(objectArray[2].value, objectArray[2]));
    queueItemArray.push(new QueueItem(objectArray[3].value, objectArray[3]));
    queueItemArray.push(new QueueItem(objectArray[4].value, objectArray[4]));
    return queueItemArray;
}
