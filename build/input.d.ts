export class Input {
    keys: any[];
    functions: any[];
    addFunction(key: any, func: any): void;
    clear(): void;
    ArrowLeft: boolean | undefined;
    ArrowRight: boolean | undefined;
    ArrowDown: boolean | undefined;
    ArrowUp: boolean | undefined;
}
