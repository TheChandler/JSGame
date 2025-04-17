import { Polygon, Vector2 } from "./GameMath.js";
export declare function drawGrid(ctx: any): void;
export declare function findLevelBounds(shapes: Polygon[]): {
    maxX: number;
    maxY: number;
    minX: number;
    minY: number;
};
export declare function printCanvas(shapes: Polygon[], exit: Polygon): void;
export declare function testCollisionsWithWorld(testShapes: any, worldShapes: any): false | any[];
export declare function getClosestVertex(shapes: Polygon[], cords: Vector2, cutoff: number): Vector2 | null;
export declare function getClosestLine(shapes: any, cords: any, cutoff: any): null;
export declare function getClosestPolygon(shapes: any, cords: any, shapeFactory: any): any;
/**
 *
 * @param max Maximum number this can be (non-inclusive)
 * @returns
 */
export declare function randomInt(max: number): number;
