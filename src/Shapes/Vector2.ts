import { IShape } from "../IShape.js";

export class Vector2 implements IShape {
    constructor(x: number | Vector2, y: number) {
        if (x instanceof Vector2) {
            this.x = x.x;
            this.y = x.y;
            return
        }
        this.x = x;
        this.y = y;
    }
    x: number;
    y: number;
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
        return new Vector2(this.x - otherVec.x, this.y - otherVec.y);
    }
    distanceTo(otherVec: Vector2) {
        return Math.sqrt(Math.pow(this.x - otherVec.x, 2) + Math.pow(this.y - otherVec.y, 2))
    }
    squaredDistanceTo(otherVec: Vector2) {
        return Math.pow(this.x - otherVec.x, 2) + Math.pow(this.y - otherVec.y, 2)
    }

    collides(shape: IShape) {
        throw new Error("Collisions not implented on Vector2")
        return false;
    }
    toString() {
        return `[${this.x}, ${this.y}]`;
    }
    toJSON() {
        return [this.x, this.y]
    }
    /** rotate in radians */
    rotate(angle: number): Vector2 {
        let sin = Math.sin(angle)
        let cos = Math.cos(angle)
        return this.transform(cos, -sin, sin, cos)

    }
    transform(a: number, b: number, c: number, d: number): Vector2 {
        this.x = (this.x * a) + (this.y * b)
        this.y = (this.x * c) + (this.y * d);
        return this;
    }
}
