export class Vector2 {
    constructor(ctx, x, y) {
        if (ctx instanceof Vector2) {
            this.x = ctx.x;
            this.y = ctx.y;
            this.ctx = null;
            return;
        }
        this.x = x;
        this.y = y;
        this.ctx = ctx;
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
        return new Vector2(this.ctx, this.x - otherVec.x, this.y - otherVec.y);
    }
    distanceTo(otherVec) {
        return Math.sqrt(Math.pow(this.x - otherVec.x, 2) + Math.pow(this.y - otherVec.y, 2));
    }
    squaredDistanceTo(otherVec) {
        return Math.pow(this.x - otherVec.x, 2) + Math.pow(this.y - otherVec.y, 2);
    }
    draw(color) {
        if (this.ctx) {
            this.ctx.fillStyle = color !== null && color !== void 0 ? color : 'red';
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            this.ctx.fill();
        }
    }
    toString() {
        return `[${this.x}, ${this.y}]`;
    }
    toJSON() {
        return [this.x, this.y];
    }
}
