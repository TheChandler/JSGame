import { IMenu } from "./IMenu.js";
import { GraphicalButton } from "./GraphicalButton.js";
import { ShapeFactory } from "../ShapeFactory.js";
import { GameCamera } from "../GameCamera.js";
export declare class Menu {
    pages: IMenu;
    currentPage: string;
    hovered: string;
    boundShapes: GraphicalButton[];
    boundShapeNames: string[];
    isVisible: boolean;
    ctx: GameCamera;
    shapeFactory: ShapeFactory;
    constructor(pages: IMenu, ctx: any, shapeFactory: any);
    click(event: any): void;
    triggerItemByName(name: string): void;
    bindToButton(name: string, button: GraphicalButton): void;
    private findItem;
    private triggerItem;
    mousemove(event: any): void;
    set _hovered(state: any);
    testActivePageButtons(cords: any): string;
    get activePage(): import("./IMenu.js").IMenuPage;
    render(): void;
}
