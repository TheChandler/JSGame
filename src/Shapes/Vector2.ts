import { IShape } from "../IShape.js";

export class Vector2 implements IShape {
    constructor(ctx: CanvasRenderingContext2D | null |  Vector2, x: number, y: number) {
        if (ctx instanceof Vector2){
            this.x = ctx.x;
            this.y = ctx.y;
            this.ctx = null;
            return
        }
        this.x = x;
        this.y = y;
        this.ctx = ctx;
    }
    x: number;
    y: number;
    ctx: CanvasRenderingContext2D | null;
    add(otherVec: Vector2) {
        this.x += otherVec.x;
        this.y += otherVec.y;
        return this;
    }
    static distance(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
    }
    static squareDistance(x1, y1, x2, y2) {
        return ((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
    }
    difference(otherVec: Vector2) {
        return new Vector2(this.ctx, this.x - otherVec.x, this.y - otherVec.y);
    }
    distanceTo(otherVec: Vector2) {
        return Math.sqrt(Math.pow(this.x - otherVec.x, 2) + Math.pow(this.y - otherVec.y, 2))
    }
    squaredDistanceTo(otherVec: Vector2) {
        return Math.pow(this.x - otherVec.x, 2) + Math.pow(this.y - otherVec.y, 2)
    }

    draw(color) {
        if (this.ctx) {
            this.ctx.fillStyle = color ?? 'red';
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            this.ctx.fill();
        }
    }
    collides(shape: IShape){
        throw new Error("Collisions not implented on Vector2")
        return false;
    }
    toString() {
        return `[${this.x}, ${this.y}]`;
    }
    toJSON(){
        return [this.x,this.y]
    }
}
