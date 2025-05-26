import { IShape, VectorLike } from "./IShape.js";
import { Vector2 } from "./Shapes/Vector2.js";
export declare class Line implements IShape {
    constructor(ctx: CanvasRenderingContext2D, a: Vector2, b: Vector2);
    a: Vector2;
    b: Vector2;
    length: number;
    ctx: CanvasRenderingContext2D;
    collides(shape: any): boolean | undefined;
    distanceTo(point: Vector2): number;
    draw(color: any): void;
    toString(): string;
}
export declare class Circle implements IShape {
    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, r: number);
    position: Vector2;
    radius: number;
    ctx: CanvasRenderingContext2D;
    get x(): number;
    get y(): number;
    set x(num: number);
    set y(num: number);
    collides(shape: any): boolean;
    draw(color: any, offset?: any): void;
    drawOutline(color: any, lineWidth?: any, offset?: any): void;
}
export declare class Polygon implements IShape {
    constructor(ctx: CanvasRenderingContext2D, points: number[][]);
    baseArray: number[][];
    points: Vector2[];
    lines: Line[];
    collided: boolean;
    color: string;
    ctx: CanvasRenderingContext2D;
    collides(shape: IShape, debug?: boolean): boolean;
    draw(color?: string, offset?: VectorLike): void;
    drawStatic(offset: any): void;
    printLines(): string;
}
export declare class Sprite {
    constructor(ctx: any, image: CanvasImageSource, x: number, y: number, width: number, height: number);
    image: CanvasImageSource;
    x: number;
    y: number;
    width: number;
    height: number;
    polygon: Polygon;
    ctx: CanvasRenderingContext2D;
    collides(shape: any, debug?: boolean): number | boolean;
    draw(offset?: any): void;
}
