// export declare class PriorityQueue {
//     constructor(items?: Array<QueueItem>);
//     public clear(): void;
//     public dump(): string;
//     public isEmpty(): boolean;
//     public peek(): QueueItem;
//     public pop(): QueueItem;
//     public push(item: QueueItem): void;

//     // TODO: remove these two if possible
//     public decreaseKey(i: number, key: any): void;
//     public increaseKey(i: number, key: any): void;
//     public contains(key: any): any;
// }

export declare class MaxPriorityQueue {
    constructor(items?: Array<QueueItem>);
    public clear(): void;
    public contains(key: string): boolean;
    public dump(): string;
    public isEmpty(): boolean;
    public peek(): QueueItem;
    public pop(): QueueItem;
    public push(item: QueueItem): void;
}

export declare class MinPriorityQueue {
    constructor(items?: Array<QueueItem>);
    public clear(): void;
    public contains(key: string): boolean;
    public dump(): string;
    public isEmpty(): boolean;
    public peek(): QueueItem;
    public pop(): QueueItem;
    public push(item: QueueItem): void;
}

export declare abstract class QueueItem {
    public value: number;
    public heapIndex: number;
    public id: string;
}

// export declare enum QueueType {
//     Min,
//     Max
// }
