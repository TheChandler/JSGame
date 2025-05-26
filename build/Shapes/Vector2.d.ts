import { IShape } from "../IShape.js";
export declare class Vector2 implements IShape {
    constructor(ctx: CanvasRenderingContext2D | null | Vector2, x: number, y: number);
    x: number;
    y: number;
    ctx: CanvasRenderingContext2D | null;
    add(otherVec: Vector2): this;
    static distance(x1: any, y1: any, x2: any, y2: any): number;
    static squareDistance(x1: any, y1: any, x2: any, y2: any): number;
    difference(otherVec: Vector2): Vector2;
    distanceTo(otherVec: Vector2): number;
    squaredDistanceTo(otherVec: Vector2): number;
    draw(color: any): void;
    toString(): string;
    toJSON(): number[];
}
