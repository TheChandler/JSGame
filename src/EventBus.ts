export class EventBus {
    listeners: Map<string, Set<(data:any) => void>>;
    constructor() {
        this.listeners = new Map();
    }



    on(event: string, callback: () => void) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, new Set());
        }

        this.listeners.get(event)?.add(callback);

        // Return cleanup function for convenient unbinding
        return () => this.off(event, callback);
    }
    off(event: string, callback: () => void) {
        if (this.listeners.has(event)) {
            this.listeners.get(event)?.delete(callback);
        }
    }
    emit(event: string, data: any) {
        if (this.listeners.has(event)) {
            for (const callback of this.listeners.get(event) ?? []) {
                callback(data)
            }
        }
    }
    clear(){this.listeners.clear()}
}