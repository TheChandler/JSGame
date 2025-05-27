export interface VectorLike {
    x: number;
    y: number;
}
export interface IShape {
    draw: (color: string, offset?: VectorLike) => void
    collides: (IShape) => boolean;
}

export abstract class Shape implements IShape {
    abstract draw(color: string, offset?: VectorLike): void;
    collides(shape: IShape) {
        throw Error("Doing collision not implemented for this shape")
        return false;
    }
}