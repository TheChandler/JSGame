import { IShape, VectorLike } from "./IShape.js";
export interface GameCamera extends CanvasRenderingContext2D {
    position: VectorLike;
    size: VectorLike;
    /**
     *
     * @param startingIntensity Scale of shake at start
     * @param time length of shake
     * @param endingIntensity optional ending scale of shake
     * @returns
     */
    smallShake: (startingIntensity: number, time: number, endingIntensity?: number) => void;
    baseObj: CanvasRenderingContext2D;
    /**
     * Probably fixes scaling issues with screen cordinates
     * @returns {number[]}
     */
    convertScreenCordsToScreenCords: (x: number, y: number) => number[];
    /**
     * converts screen cordinates to in world cordinates
     * @returns {number[]}
    */
    convertScreenCordsToWorldCords: (x: number, y: number) => number[];
    drawShapes: (shapes: IShape[]) => void;
    update: (x: number, y: number) => void;
}
export declare class CameraConstructor {
    static MakeGameCamera(ctx: CanvasRenderingContext2D, canvas: any, x: any, y: any): GameCamera;
}
