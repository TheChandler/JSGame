import { IShape } from "../IShape.js";
export declare class Vector2 implements IShape {
    constructor(x: number | Vector2, y: number);
    x: number;
    y: number;
    add(otherVec: Vector2): this;
    static distance(x1: any, y1: any, x2: any, y2: any): number;
    static squareDistance(x1: any, y1: any, x2: any, y2: any): number;
    difference(otherVec: Vector2): Vector2;
    distanceTo(otherVec: Vector2): number;
    squaredDistanceTo(otherVec: Vector2): number;
    collides(shape: IShape): boolean;
    toString(): string;
    toJSON(): number[];
    /** rotate in radians */
    rotate(angle: number): Vector2;
    transform(a: number, b: number, c: number, d: number): Vector2;
}
