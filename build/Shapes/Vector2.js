export class Vector2 {
    constructor(x, y) {
        if (x instanceof Vector2) {
            this.x = x.x;
            this.y = x.y;
            return;
        }
        this.x = x;
        this.y = y;
    }
    add(otherVec) {
        this.x += otherVec.x;
        this.y += otherVec.y;
        return this;
    }
    static distance(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }
    static squareDistance(x1, y1, x2, y2) {
        return ((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }
    difference(otherVec) {
        return new Vector2(this.x - otherVec.x, this.y - otherVec.y);
    }
    distanceTo(otherVec) {
        return Math.sqrt(Math.pow(this.x - otherVec.x, 2) + Math.pow(this.y - otherVec.y, 2));
    }
    squaredDistanceTo(otherVec) {
        return Math.pow(this.x - otherVec.x, 2) + Math.pow(this.y - otherVec.y, 2);
    }
    collides(shape) {
        throw new Error("Collisions not implented on Vector2");
        return false;
    }
    toString() {
        return `[${this.x}, ${this.y}]`;
    }
    toJSON() {
        return [this.x, this.y];
    }
}
