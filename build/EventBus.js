export class EventBus {
    constructor() {
        this.listeners = new Map();
    }
    on(event, callback) {
        var _a;
        if (!this.listeners.has(event)) {
            this.listeners.set(event, new Set());
        }
        (_a = this.listeners.get(event)) === null || _a === void 0 ? void 0 : _a.add(callback);
        // Return cleanup function for convenient unbinding
        return () => this.off(event, callback);
    }
    off(event, callback) {
        var _a;
        if (this.listeners.has(event)) {
            (_a = this.listeners.get(event)) === null || _a === void 0 ? void 0 : _a.delete(callback);
        }
    }
    emit(event, data) {
        var _a;
        if (this.listeners.has(event)) {
            for (const callback of (_a = this.listeners.get(event)) !== null && _a !== void 0 ? _a : []) {
                callback(data);
            }
        }
    }
    clear() { this.listeners.clear(); }
}
