import { Circle, Line, Polygon, Sprite, Vector2 } from "./GameMath.js";
export declare class ShapeFactory {
    constructor(ctx: CanvasRenderingContext2D);
    ctx: CanvasRenderingContext2D;
    createVector2(x: number, y: number): Vector2;
    createLine(a: Vector2, b: Vector2): Line;
    createCircle(x: number, y: number, r: number): Circle;
    createPolygon(points: number[][]): Polygon;
    createSprite(image: any, x: any, y: any, width: any, height: any): Sprite;
}
