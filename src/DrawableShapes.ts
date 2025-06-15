import { Circle, Line, Polygon, Sprite } from "./GameMath.js";
import { Vector2 } from "./main.js";






export class DrawableVector2 extends Vector2 {
    ctx: CanvasRenderingContext2D | null;

    constructor(ctx: CanvasRenderingContext2D, x: number | Vector2, y: number) {
        super(x, y);
        this.ctx = ctx;
    }
    draw(color) {
        if (this.ctx) {
            this.ctx.fillStyle = color ?? 'red';
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            this.ctx.fill();
        }
    }
}




export class DrawableLine extends Line {
    ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D, a: Vector2, b: Vector2) {
        super(a, b);
        this.ctx = ctx;
    }

    draw(color) {
        // ctx.fillStyle = color ?? 'green'; //Lines don't fill
        this.ctx.beginPath()
        this.ctx.moveTo(this.a.x, this.a.y)
        this.ctx.lineTo(this.b.x, this.b.y)
        this.ctx.stroke();
    }
}

export class DrawableCircle extends Circle {
    ctx: CanvasRenderingContext2D;
    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
        super(x, y, r)
        this.ctx = ctx;
    }
    draw(color, offset?) {
        this.ctx.fillStyle = color ?? 'red';
        this.ctx.beginPath();
        this.ctx.arc(this.position.x + (offset?.x ?? 0), this.position.y + (offset?.y ?? 0), this.radius, 0, 2 * Math.PI);
        this.ctx.fill()
    }
    drawOutline(color, lineWidth?, offset?) {
        this.ctx.strokeStyle = color ?? 'red';
        this.ctx.lineWidth = lineWidth ?? 2
        this.ctx.beginPath();
        this.ctx.arc(this.position.x + (offset?.x ?? 0), this.position.y + (offset?.y ?? 0), this.radius, 0, 2 * Math.PI);
        this.ctx.stroke()
    }
}

export class DrawablePolygon extends Polygon {

    ctx: CanvasRenderingContext2D;
    color: string;
    constructor(ctx: CanvasRenderingContext2D, points: number[][]) {
        super(points)
        this.ctx = ctx;
        let randomNum = ((Math.random() * .5 + .4) * 0xff) << 16
        randomNum += ((Math.random() * .2 + .1) * 0xff) << 8
        randomNum += ((Math.random() * .2 + .3) * 0xff)
        this.color = "#" + Math.floor(randomNum).toString(16).padStart(6, '0') //+ 'C0';

    }

    draw(color?: string, offset?: Vector2) {
        let xOffset = 0;
        let yOffset = 0;
        if (offset) {
            xOffset = offset.x;
            yOffset = offset.y;
        }
        this.ctx.fillStyle = (this.collided ? 'red' : this.color);
        this.ctx.beginPath();
        this.ctx.moveTo(this.points[0].x + xOffset, this.points[0].y + yOffset)
        for (let point of this.points) {
            this.ctx.lineTo(point.x + xOffset, point.y + yOffset);
        }
        this.ctx.closePath();
        this.ctx.fill();
    }
}


export class DrawableSprite extends Sprite {
    ctx: CanvasRenderingContext2D;
    image: CanvasImageSource;

    constructor(ctx: CanvasRenderingContext2D, image: CanvasImageSource, x: number, y: number, width: number, height: number) {
        super(x, y, width, height)
        this.image = image;

        this.ctx = ctx;
    }
    draw(offset?) {
        try {
            this.ctx.drawImage(this.image, this.x + (offset?.x ?? 0), this.y + (offset?.y ?? 0), this.width, this.height);
        } catch (e) {
            console.error("Couldn't draw image", this.image)
        }
    }
}