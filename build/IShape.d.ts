export interface VectorLike {
    x: number;
    y: number;
}
export interface IShape {
    draw: (color: string, offset?: VectorLike) => void;
}
export declare abstract class Shape implements IShape {
    abstract draw(color: string, offset?: VectorLike): void;
}
