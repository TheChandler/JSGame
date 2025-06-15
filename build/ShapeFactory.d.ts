import { DrawableCircle, DrawableLine, DrawablePolygon, DrawableSprite, DrawableVector2 } from "./DrawableShapes.js";
import { Vector2 } from "./Shapes/Vector2.js";
export declare class ShapeFactory {
    constructor(ctx: CanvasRenderingContext2D);
    ctx: CanvasRenderingContext2D;
    createVector2(x: number, y: number): DrawableVector2;
    createLine(a: Vector2, b: Vector2): DrawableLine;
    createCircle(x: number, y: number, r: number): DrawableCircle;
    createPolygon(points: number[][]): DrawablePolygon;
    createSprite(image: any, x: any, y: any, width: any, height: any): DrawableSprite;
}
