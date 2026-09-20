export declare class EventBus {
    listeners: Map<string, Set<(data: any) => void>>;
    constructor();
    on(event: string, callback: () => void): () => void;
    off(event: string, callback: () => void): void;
    emit(event: string, data: any): void;
    clear(): void;
}
