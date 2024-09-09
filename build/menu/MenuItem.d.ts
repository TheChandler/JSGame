import { Polygon, Vector2 } from "../GameMath.js";
import { ShapeFactory } from "../ShapeFactory.js";
export declare class MenuItem {
    position: Vector2;
    box: Polygon;
    text: string;
    func: (x: number, y: number) => void;
    shapeFactory: ShapeFactory;
    constructor(x: any, y: any, text: any, func: any, shapeFactory: any);
    collides([x, y]: [any, any], debug: any): boolean;
    click(x: number, y: number): void;
    draw(ctx: any): void;
}
