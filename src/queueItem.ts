export class QueueItem {
    public value: number;
    public item: any;
    public heapIndex: number;

    constructor(value: number, item: any) {
        this.value = value;
        this.item = item;
        this.heapIndex = 0;
    }
}
