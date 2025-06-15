export class Shape {
    collides(shape) {
        throw Error("Doing collision not implemented for this shape");
        return false;
    }
}
export class DrawableShape extends Shape {
}
