'use strict';

class Rectange {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangkeWithText extends Rectange {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
    }
}

const div = new ColoredRectangkeWithText(25, 10, 'Taiga', 'green');

// const square = new Rectange(10, 10);
// const long = new Rectange(15, 200);

// console.log(square.calcArea());
// console.log(long.calcArea());

div.showMyProps();
console.log(div.calcArea());