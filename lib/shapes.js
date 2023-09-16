class Shape {
    constructor(text, text_color, shape, shape_color) {
        this.text = text;
        this.text_color = text_color;
        this.shape = shape;
        this.shape_color = shape_color;
    };
    createLogo() {
        return `<svg  width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <text x="50%" y="50%" text-anchor="middle" fill="${this.text_color}" font-size="60px" font-family="Arial, Helvetica, sans-serif">${this.text}</text>
            ${this.getShape()}</svg>`
    };

    getShape() {
    switch (this.shape) {
        case 'Square':
            return new Square(this.text, this.text_color, this.shape_color).createLogo();
        case 'Circle':
            return new Circle(this.text, this.text_color, this.shape_color).createLogo();
        case 'Triangle':
            return new Triangle(this.text, this.text_color, this.shape_color).createLogo();
        }
    };
};
        
class Circle extends Shape {
    
    createLogo() {
        return `<circle cx="150" cy="100" r="100" fill="${this.shape_color}" />`
    };
};

class Square extends Shape {
    createLogo() {
        return `<rect width="200" height="200" fill="${this.shape_color}" />`
    };
};

class Triangle extends Shape {
    createLogo() {
        return `<polygon points="100,0 0,200 200,200" fill="${this.shape_color}" />`
    };
};
    // const square = new Shape('Square', 'text', 'text_color', 'shape_color');
    // const circle = new Shape('Circle', 'text', 'text_color', 'shape_color');
    // const triangle = new Shape('Triangle', 'text', 'text_color', 'shape_color');



module.exports = Shape;