export declare class PriorityQueue {
    public clear(): void;
    public dump(): string;
    public isEmpty(): boolean;
    public peek(): QueueItem;
    public pop(): QueueItem;
    public push(item: QueueItem): void;
}

export declare class QueueItem {
    public value: number;
    public item: any;
    public heapIndex: number;
}
