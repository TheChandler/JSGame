import { Vector2 } from "./Shapes/Vector2.js";
// function convertToVector2(a, b?) {
//     if (a instanceof Vector2) {
//         return a;
//     } else if (Array.isArray(a) && a.length == 2) {
//         return new Vector2(a[0], a[1]);
//     } else if (Object.hasOwn(a, 'x') && Object.hasOwn(a, 'y')) {
//         return new Vector2(a.x, a.y);
//     } else if (typeof a === 'number' && typeof b === 'number') {
//         return new Vector2(a, b);
//     } else {
//         throw new Error("Not a Vector2 or vector2 compatible")
//     }
// }
export class Line {
    constructor(a, b) {
        try {
            this.a = a;
            this.b = b;
        }
        catch (e) {
            console.error(e);
            throw new Error("Cannot create Line from " + a + " " + b);
        }
        this.length = this.a.distanceTo(this.b);
    }
    collides(shape) {
        if (shape instanceof Vector2) {
            return shape.distanceTo(this.a) + shape.distanceTo(this.b) - this.length == 0;
        }
        else if (shape instanceof Circle) {
            if (shape.collides(this.a) || shape.collides(this.b)) {
                return true;
            }
            let dot = (((shape.position.x - this.a.x) * (this.b.x - this.a.x)) + ((shape.position.y - this.a.y) * (this.b.y - this.a.y))) / this.a.squaredDistanceTo(this.b);
            if (dot < 0 || dot > 1) {
                return false;
            }
            let collide = shape.collides(new Vector2(this.a.x + dot * (this.b.x - this.a.x), this.a.y + dot * (this.b.y - this.a.y)));
            if (collide) {
                console.log("Here is the collision");
                console.log(this.a.x + dot * (this.b.x - this.a.x), this.a.y + dot * (this.b.y - this.a.y));
                console.log(shape.position);
                return true;
            }
            return false;
        }
        else {
            throw new Error("Unhandled collsions type for Line and " + shape.constructor.name);
        }
    }
    distanceTo(point) {
        let dot = (((point.x - this.a.x) * (this.b.x - this.a.x)) + ((point.y - this.a.y) * (this.b.y - this.a.y))) / this.a.squaredDistanceTo(this.b);
        if (dot < 0 || dot > 1) {
            return Math.min(point.distanceTo(this.a), point.distanceTo(this.b));
        }
        return point.distanceTo(new Vector2(this.a.x + dot * (this.b.x - this.a.x), this.a.y + dot * (this.b.y - this.a.y)));
    }
    toString() {
        return this.a + " " + this.b;
    }
}
export class Circle {
    constructor(x, y, r) {
        this.position = new Vector2(x, y);
        this.radius = r;
    }
    get x() {
        return this.position.x;
    }
    get y() {
        return this.position.y;
    }
    set x(num) {
        this.position.x = num;
    }
    set y(num) {
        this.position.y = num;
    }
    collides(shape) {
        if (shape instanceof Vector2) {
            if (shape.distanceTo(this.position) < this.radius)
                console.log(shape.distanceTo(this.position), this.radius);
            return shape.distanceTo(this.position) < this.radius;
        }
        else if (shape instanceof Circle) {
            return shape.position.distanceTo(this.position) < this.radius + shape.radius;
        }
        else if (shape instanceof Sprite) {
            return shape.collides(this);
        }
        else {
            throw new Error("Unhandled collsions type for Circle and ", shape.constructor.name);
        }
    }
}
export class Polygon {
    constructor(points) {
        this.baseArray = points;
        this.points = points.map(p => new Vector2(p[0], p[1]));
        this.lines = this.points.map((p, i, a) => {
            if (i < a.length - 1) {
                return new Line(p, a[i + 1]);
            }
            if (i == a.length - 1) {
                return new Line(p, a[0]);
            }
        });
        this.collided = false;
    }
    collides(shape, debug) {
        var _a, _b;
        // if (debug) {
        //     console.log("Collides shape: ", shape)
        //     console.log(this.points)
        // }
        if (shape instanceof Circle || shape instanceof Vector2) {
            for (let line of this.lines) {
                if (line.collides(shape)) {
                    if (debug) {
                        console.log("collided with Line");
                        console.log("line: ", line, "shape: ", shape);
                    }
                    return true;
                }
            }
            let px;
            let py;
            let collision = false;
            try {
                px = (_a = shape.x) !== null && _a !== void 0 ? _a : shape.position.x;
                py = (_b = shape.y) !== null && _b !== void 0 ? _b : shape.position.y;
            }
            catch (e) {
                console.error("Polygon error colliding with: ", shape);
            }
            if (debug) {
                // console.log("px py: ", px, py)
            }
            this.points.forEach((vc, i) => {
                let vn = i < this.points.length - 1 ? this.points[i + 1] : this.points[0];
                if (((vc.y > py) != (vn.y > py)) && (px < (vn.x - vc.x) * (py - vc.y) / (vn.y - vc.y) + vc.x)) {
                    collision = !collision;
                }
            });
            return collision;
        }
        else {
            throw new Error("Unhandled collision type for Polygon and " + shape.constructor.name);
        }
    }
    //todo: Fix this. Create type for new object made by createCamera. Check if object is of that type then don't run this if it isn't
    // drawStatic(offset) {
    //     (<{ baseObj: any }><unknown>this.ctx).baseObj.beginPath();
    //     (<{ baseObj: any }><unknown>this.ctx).baseObj.moveTo(this.points[0].x + (offset?.x ?? 0), this.points[0].y + (offset?.y))
    //     for (let point of this.points) {
    //         (<{ baseObj: any }><unknown>this.ctx).baseObj.lineTo(point.x + (offset?.x ?? 0), point.y + (offset?.y ?? 0));
    //     }
    //     (<{ baseObj: any }><unknown>this.ctx).baseObj.closePath();
    //     (<{ baseObj: any }><unknown>this.ctx).baseObj.fill();
    // }
    printLines() {
        // for (let line of this.lines) {
        //     console.log(line.toString());
        // }
        //@ts-ignore -- TS struggles with reduce I guess. read this when less tired: https://ayubbegimkulov.com/reduce-typescript/
        return "[" + this.points.reduce((val, val2) => val + ", " + val2) + "]";
    }
}
export class Sprite {
    constructor(x, y, width, height) {
        // this.image = new Image()
        // this.image.src = './images/playButton.png'
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.polygon = new Polygon([
            [x, y], [x + width, y], [x + width, y + height], [x, y + height]
        ]);
    }
    collides(shape, debug = false) {
        if (shape instanceof Vector2) {
            return (shape.x >= this.x &&
                shape.x <= this.x + this.width &&
                shape.y >= this.y &&
                shape.y <= this.y + this.height);
        }
        if (shape instanceof Circle) {
            return ((shape.x >= this.x
                && shape.x <= this.x + this.width
                && shape.y >= this.y - shape.radius
                && shape.y <= this.y + this.height + shape.radius) || (shape.y >= this.y
                && shape.y <= this.y + this.height
                && shape.x >= this.x - shape.radius
                && shape.x <= this.x + this.width + shape.radius) || ((shape.x + shape.radius > this.x
                && shape.x - shape.radius < this.x + this.width
                && shape.y + shape.radius > this.y
                && shape.y - shape.radius < this.y + this.height)
                && (Vector2.distance(shape.x, shape.y, this.x, this.y) < shape.radius
                    || Vector2.distance(shape.x, shape.y, this.x + this.width, this.y) < shape.radius
                    || Vector2.distance(shape.x, shape.y, this.x, this.y + this.height) < shape.radius
                    || Vector2.distance(shape.x, shape.y, this.x + this.width, this.y + this.height) < shape.radius)));
        }
        if (shape instanceof Sprite) {
            return (shape.x + shape.width >= this.x
                && shape.x <= this.x + this.width
                && shape.y + shape.height >= this.y
                && shape.y <= this.y + this.height);
        }
        return this.polygon.collides(shape, debug);
    }
}
