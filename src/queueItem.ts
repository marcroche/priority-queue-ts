export abstract class QueueItem {
    
    public value: number;
    public heapIndex: number;
    public id: string;

    constructor(id: string = undefined) {
        this.id = id || 
            'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        this.heapIndex = 0;
    }

    // private guid(): string {
    //     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    //         let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    //         return v.toString(16);
    //     });
    // }
}
