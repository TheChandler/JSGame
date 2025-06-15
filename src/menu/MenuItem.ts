// import { shapeFactory } from "../../code/game.js";
import { DrawablePolygon } from "../DrawableShapes.js";
import { ShapeFactory } from "../ShapeFactory.js";
import { Vector2 } from "../Shapes/Vector2.js";

export class MenuItem {
    position: Vector2;
    box: DrawablePolygon;
    text: string;
    func: (x: number, y: number) => void;
    shapeFactory: ShapeFactory;

    constructor(x, y, text, func, shapeFactory) {
        this.shapeFactory = shapeFactory;
        this.position = shapeFactory.createVector2(x, y)
        this.box = shapeFactory.createPolygon(
            [
                [x, y],
                [x + 180, y],
                [x + 180, y + 20],
                [x, y + 20],

            ])
        this.box.color = '#AAFFBB'
        this.text = text;
        this.func = func;
    }
    collides([x, y], debug) {
        if (debug) {
            console.log([x, y])
        }
        return this.box.collides(this.shapeFactory.createVector2(x, y), debug)
    }
    click(x: number, y: number) {
        this.func(x, y);
    }
    draw(ctx) {
        this.box.draw();
        ctx.fillStyle = "#000000"
        ctx.font = "20px monospace";
        ctx.fillText(this.text, this.position.x + 5, this.position.y + 15);
    }
}