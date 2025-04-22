export class Input {
    constructor() {
        this.keys = [];
        this.keys['ArrowLeft'] = false
        this.keys['ArrowRight'] = false
        this.keys['ArrowDown'] = false
        this.keys['ArrowUp'] = false
        this.functions = []
        document.addEventListener('keydown', (event) => {
            let key = event.key;
            this.keys[key] = true;
            if (this.functions[key]) {
                this.functions[key]();
            }
        })
        document.addEventListener('keyup', (event) => {
            let key = event.key;
            this.keys[key] = false;
        })
        document.addEventListener('mousedown', () => {
            this.keys['mouseleft'] = true
        })
        document.addEventListener('mouseup', () => {
            this.keys['mouseleft'] = false
        })
    }
    addFunction(key, func) {
        this.functions[key] = func;
    }
    clear() {
        this.ArrowLeft = false;
        this.ArrowRight = false;
        this.ArrowDown = false;
        this.ArrowUp = false;
    }
}