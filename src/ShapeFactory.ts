import { DrawableCircle, DrawableLine, DrawablePolygon, DrawableSprite, DrawableVector2 } from "./DrawableShapes.js";
import { Vector2 } from "./Shapes/Vector2.js";


export class ShapeFactory {
    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }
    ctx: CanvasRenderingContext2D;


    createVector2(x: number, y: number) {
        return new DrawableVector2(this.ctx, x, y)
    }

    createLine(a: Vector2, b: Vector2) {
        return new DrawableLine(this.ctx, a, b)
    }

    createCircle(x: number, y: number, r: number) {
        return new DrawableCircle(this.ctx, x, y, r)
    }

    createPolygon(points: number[][]) {
        return new DrawablePolygon(this.ctx, points);
    }

    createSprite(image, x, y, width, height){
        return new DrawableSprite(this.ctx, image, x, y, width, height)
    }
}