


export class State {
    name?: string;
    engine: any;
    unsubscribers: (() => void)[];

    constructor(engine) {
        this.engine = engine;
        this.unsubscribers = [] as (() => void)[];
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
