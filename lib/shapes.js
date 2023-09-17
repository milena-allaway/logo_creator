class Shape {
    constructor(text, text_color, shape, shape_color) {
        this.text = text;
        this.text_color = text_color;
        this.shape = shape;
        this.shape_color = shape_color;
    };
    // render() {
    //     return `<svg  width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    // <text x="50%" y="50%" text-anchor="middle" fill="${this.text_color}" ${this.text}</text>
    // ${this.getShape()}</svg>`
    // };
    setColor(color) {
        this.shape_color = (color);
    };

//     getShape() {
//     switch (this.shape) {
//         case 'Square':
//             return new Square(this.text, this.text_color, this.shape_color).render();
//         case 'Circle':
//             return new Circle(this.text, this.text_color, this.shape_color).render();
//         case 'Triangle':
//             return new Triangle(this.text, this.text_color, this.shape_color).render();
//         }
//     };
};
        
class Circle extends Shape {
    
    render() {
        console.log('Circle - shape_color:', this.shape_color); //currently not working, undefined
        return `<circle cx="150" cy="100" r="100" fill="${this.shape_color}" />`
    };
};

class Square extends Shape {
    render() {
        console.log('Square - shape_color:', this.shape_color); //currently not working, undefined
        return `<rect width="200" height="200" fill="${this.shape_color}" />`
    };
};

class Triangle extends Shape {
    render() {
        console.log('Triangle - shape_color:', this.shape_color); //currently not working, undefined
        return `<polygon points="100,0 0,200 200,200" fill="${this.shape_color}" />`
    };
};
    
module.exports = { Shape, Circle, Square, Triangle };