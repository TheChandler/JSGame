import { Circle, Line, Polygon, Sprite } from "./GameMath.js";
import { Vector2 } from "./main.js";
export declare class DrawableVector2 extends Vector2 {
    ctx: CanvasRenderingContext2D | null;
    constructor(ctx: CanvasRenderingContext2D, x: number | Vector2, y: number);
    draw(color: any): void;
}
export declare class DrawableLine extends Line {
    ctx: CanvasRenderingContext2D;
    constructor(ctx: CanvasRenderingContext2D, a: Vector2, b: Vector2);
    draw(color: any): void;
}
export declare class DrawableCircle extends Circle {
    ctx: CanvasRenderingContext2D;
    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, r: number);
    draw(color: any, offset?: any): void;
    drawOutline(color: any, lineWidth?: any, offset?: any): void;
}
export declare class DrawablePolygon extends Polygon {
    ctx: CanvasRenderingContext2D;
    color: string;
    constructor(ctx: CanvasRenderingContext2D, points: number[][]);
    draw(color?: string, offset?: Vector2): void;
}
export declare class DrawableSprite extends Sprite {
    ctx: CanvasRenderingContext2D;
    image: CanvasImageSource;
    constructor(ctx: CanvasRenderingContext2D, image: CanvasImageSource, x: number, y: number, width: number, height: number);
    draw(offset?: any): void;
}
