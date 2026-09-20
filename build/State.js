export class State {
    constructor(engine) {
        this.engine = engine;
        this.unsubscribers = [];
    }
    enter() {
    }
    exit() {
        for (const unbind of this.unsubscribers) {
            unbind();
        }
        this.unsubscribers = [];
    }
    update(dt) {
    }
}
