import { DrawablePolygon } from "../DrawableShapes.js";
import { ShapeFactory } from "../ShapeFactory.js";
import { Vector2 } from "../Shapes/Vector2.js";
export declare class MenuItem {
    position: Vector2;
    box: DrawablePolygon;
    text: string;
    func: (x: number, y: number) => void;
    shapeFactory: ShapeFactory;
    constructor(x: any, y: any, text: any, func: any, shapeFactory: any);
    collides([x, y]: [any, any], debug: any): boolean;
    click(x: number, y: number): void;
    draw(ctx: any): void;
}
