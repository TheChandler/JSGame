export interface VectorLike {
    x: number;
    y: number;
}
export interface IShape {
    collides: (IShape) => boolean;
}

export abstract class Shape implements IShape {
    collides(shape: IShape) {
        throw Error("Doing collision not implemented for this shape")
        return false;
    }
}

export interface IDrawableShape extends IShape {
    draw: (color: string, offset?: VectorLike) => void
}

export abstract class DrawableShape extends Shape implements IDrawableShape {
    abstract draw(color: string, offset?: VectorLike): void;
}