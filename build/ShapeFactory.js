import { DrawableCircle, DrawableLine, DrawablePolygon, DrawableSprite, DrawableVector2 } from "./DrawableShapes.js";
export class ShapeFactory {
    constructor(ctx) {
        this.ctx = ctx;
    }
    createVector2(x, y) {
        return new DrawableVector2(this.ctx, x, y);
    }
    createLine(a, b) {
        return new DrawableLine(this.ctx, a, b);
    }
    createCircle(x, y, r) {
        return new DrawableCircle(this.ctx, x, y, r);
    }
    createPolygon(points) {
        return new DrawablePolygon(this.ctx, points);
    }
    createSprite(image, x, y, width, height) {
        return new DrawableSprite(this.ctx, image, x, y, width, height);
    }
}
