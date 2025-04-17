declare class Event {
    constructor(func: () => void, time: number, id: number);
    func: () => void;
    time: number;
    id: number;
}
export declare class Events {
    events: Event[];
    currentId: number;
    update(): void;
    add(func: () => void, time: number): void;
}
export {};
