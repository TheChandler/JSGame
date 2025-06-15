import { DrawableSprite } from "../DrawableShapes.js";
export declare class GraphicalButton {
    /**
     *
     * @param img_unhovered the image of the button normally
     * @param img_hovered the image of the button when hovered over
     * @param x The position of the button as % from left to right of screen
     * @param y the position of the button as % from top to bottom of screen
     * @param w the width of the button as % of screen size
     * @param h the height of the button as % of width.
     */
    constructor(img_unhovered: any, img_hovered: any, x: any, y: any, w: any, h: any, canvas: any, shapeFactory: any, staticShapeFactory: any);
    hovered: boolean;
    image_unhovered: HTMLImageElement;
    image_hovered: HTMLImageElement;
    x: number;
    y: number;
    w: number;
    h: number;
    sprite: DrawableSprite;
    canvas: any;
    shapeFactory: any;
    staticShapeFactory: any;
    set hover(hov: boolean);
    draw(): void;
}
