export class Input {
    constructor(engine) {
        this.keys = [];
        this.keys['ArrowLeft'] = false;
        this.keys['ArrowRight'] = false;
        this.keys['ArrowDown'] = false;
        this.keys['ArrowUp'] = false;
        this.eventBus = engine.eventBus;
        document.addEventListener('keydown', (event) => {
            let key = event.key;
            this.keys[key] = true;
            this.eventBus.emit("keydown", event);
        });
        document.addEventListener('keyup', (event) => {
            let key = event.key;
            this.keys[key] = false;
            this.eventBus.emit("keyup", event);
        });
        document.addEventListener('mousedown', (event) => {
            this.eventBus.emit("mousedown", event);
            this.keys['mouseleft'] = true;
        });
        document.addEventListener('mouseup', (event) => {
            this.eventBus.emit("mouseup", event);
            this.keys['mouseleft'] = false;
        });
    }
}
