export class GraphicalButton {
    /**
     *
     * @param img_unhovered the image of the button normally
     * @param img_hovered the image of the button when hovered over
     * @param x The position of the button as % from left to right of screen
     * @param y the position of the button as % from top to bottom of screen
     * @param w the width of the button as % of screen size
     * @param h the height of the button as % of width.
     */
    constructor(img_unhovered, img_hovered, x, y, w, h, canvas, shapeFactory, staticShapeFactory) {
        this.hovered = false;
        console.log(x, y, w, h);
        this.canvas = canvas;
        this.shapeFactory = shapeFactory;
        this.staticShapeFactory = staticShapeFactory;
        this.image_unhovered = img_unhovered;
        this.image_hovered = img_hovered;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.sprite = staticShapeFactory.createSprite(this.image_unhovered, canvas.width * x, canvas.height * y, canvas.width * w, canvas.width * w * h);
    }
    set hover(hov) {
        this.hovered = hov;
        if (hov) {
            this.sprite.image = this.image_hovered;
        }
        else {
            this.sprite.image = this.image_unhovered;
        }
    }
    draw() {
        this.sprite.draw();
    }
}
