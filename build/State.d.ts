export declare class State {
    name?: string;
    engine: any;
    unsubscribers: (() => void)[];
    constructor(engine: any);
    enter(): void;
    exit(): void;
    update(dt: any): void;
}
