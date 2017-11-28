export declare class PriorityQueue {
    constructor(items?: Array<QueueItem>);
    public clear(): void;
    public dump(): string;
    public isEmpty(): boolean;
    public peek(): QueueItem;
    public pop(): QueueItem;
    public push(item: QueueItem): void;

    // TODO: remove these two if possible
    public decreaseKey(i: number, key: any): void;
    public increaseKey(i: number, key: any): void;
    public contains(key: any): any;
}

export declare class QueueItem {
    public value: number;
    public item: any;
    public heapIndex: number;
}

export declare enum QueueType {
    Min,
    Max
}
