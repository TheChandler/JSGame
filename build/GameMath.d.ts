import { IShape } from "./IShape.js";
import { Vector2 } from "./Shapes/Vector2.js";
export declare class Line implements IShape {
    constructor(a: Vector2, b: Vector2);
    a: Vector2;
    b: Vector2;
    length: number;
    collides(shape: IShape): boolean;
    distanceTo(point: Vector2): number;
    toString(): string;
}
export declare class Circle implements IShape {
    constructor(x: number, y: number, r: number);
    position: Vector2;
    radius: number;
    get x(): number;
    get y(): number;
    set x(num: number);
    set y(num: number);
    collides(shape: any): boolean;
}
export declare class Polygon implements IShape {
    constructor(points: number[][]);
    baseArray: number[][];
    points: Vector2[];
    lines: Line[];
    collided: boolean;
    collides(shape: IShape, debug?: boolean): boolean;
    printLines(): string;
}
export declare class Sprite implements IShape {
    constructor(x: number, y: number, width: number, height: number);
    x: number;
    y: number;
    width: number;
    height: number;
    polygon: Polygon;
    collides(shape: any, debug?: boolean): boolean;
}
