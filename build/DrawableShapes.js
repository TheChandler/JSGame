import { Circle, Line, Polygon, Sprite } from "./GameMath.js";
import { Vector2 } from "./main.js";
export class DrawableVector2 extends Vector2 {
    constructor(ctx, x, y) {
        super(x, y);
        this.ctx = ctx;
    }
    draw(color) {
        if (this.ctx) {
            this.ctx.fillStyle = color !== null && color !== void 0 ? color : 'red';
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            this.ctx.fill();
        }
    }
}
export class DrawableLine extends Line {
    constructor(ctx, a, b) {
        super(a, b);
        this.ctx = ctx;
    }
    draw(color) {
        // ctx.fillStyle = color ?? 'green'; //Lines don't fill
        this.ctx.beginPath();
        this.ctx.moveTo(this.a.x, this.a.y);
        this.ctx.lineTo(this.b.x, this.b.y);
        this.ctx.stroke();
    }
}
export class DrawableCircle extends Circle {
    constructor(ctx, x, y, r) {
        super(x, y, r);
        this.ctx = ctx;
    }
    draw(color, offset) {
        var _a, _b;
        this.ctx.fillStyle = color !== null && color !== void 0 ? color : 'red';
        this.ctx.beginPath();
        this.ctx.arc(this.position.x + ((_a = offset === null || offset === void 0 ? void 0 : offset.x) !== null && _a !== void 0 ? _a : 0), this.position.y + ((_b = offset === null || offset === void 0 ? void 0 : offset.y) !== null && _b !== void 0 ? _b : 0), this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }
    drawOutline(color, lineWidth, offset) {
        var _a, _b;
        this.ctx.strokeStyle = color !== null && color !== void 0 ? color : 'red';
        this.ctx.lineWidth = lineWidth !== null && lineWidth !== void 0 ? lineWidth : 2;
        this.ctx.beginPath();
        this.ctx.arc(this.position.x + ((_a = offset === null || offset === void 0 ? void 0 : offset.x) !== null && _a !== void 0 ? _a : 0), this.position.y + ((_b = offset === null || offset === void 0 ? void 0 : offset.y) !== null && _b !== void 0 ? _b : 0), this.radius, 0, 2 * Math.PI);
        this.ctx.stroke();
    }
}
export class DrawablePolygon extends Polygon {
    constructor(ctx, points) {
        super(points);
        this.ctx = ctx;
        let randomNum = ((Math.random() * .5 + .4) * 0xff) << 16;
        randomNum += ((Math.random() * .2 + .1) * 0xff) << 8;
        randomNum += ((Math.random() * .2 + .3) * 0xff);
        this.color = "#" + Math.floor(randomNum).toString(16).padStart(6, '0'); //+ 'C0';
    }
    draw(color, offset) {
        let xOffset = 0;
        let yOffset = 0;
        if (offset) {
            xOffset = offset.x;
            yOffset = offset.y;
        }
        this.ctx.fillStyle = (this.collided ? 'red' : this.color);
        this.ctx.beginPath();
        this.ctx.moveTo(this.points[0].x + xOffset, this.points[0].y + yOffset);
        for (let point of this.points) {
            this.ctx.lineTo(point.x + xOffset, point.y + yOffset);
        }
        this.ctx.closePath();
        this.ctx.fill();
    }
}
export class DrawableSprite extends Sprite {
    constructor(ctx, image, x, y, width, height) {
        super(x, y, width, height);
        this.image = image;
        this.ctx = ctx;
    }
    draw(offset) {
        var _a, _b;
        try {
            this.ctx.drawImage(this.image, this.x + ((_a = offset === null || offset === void 0 ? void 0 : offset.x) !== null && _a !== void 0 ? _a : 0), this.y + ((_b = offset === null || offset === void 0 ? void 0 : offset.y) !== null && _b !== void 0 ? _b : 0), this.width, this.height);
        }
        catch (e) {
            console.error("Couldn't draw image", this.image);
        }
    }
}
