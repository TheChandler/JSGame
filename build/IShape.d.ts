export interface VectorLike {
    x: number;
    y: number;
}
export interface IShape {
    draw: (color: string, offset?: VectorLike) => void;
    collides: (IShape: any) => boolean;
}
export declare abstract class Shape implements IShape {
    abstract draw(color: string, offset?: VectorLike): void;
    collides(shape: IShape): boolean;
}
