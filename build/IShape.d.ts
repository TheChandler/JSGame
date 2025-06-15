export interface VectorLike {
    x: number;
    y: number;
}
export interface IShape {
    collides: (IShape: any) => boolean;
}
export declare abstract class Shape implements IShape {
    collides(shape: IShape): boolean;
}
export interface IDrawableShape extends IShape {
    draw: (color: string, offset?: VectorLike) => void;
}
export declare abstract class DrawableShape extends Shape implements IDrawableShape {
    abstract draw(color: string, offset?: VectorLike): void;
}
