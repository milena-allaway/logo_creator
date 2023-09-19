// Description: Shape class and its subclasses
class Shape {
    constructor(text, text_color, shape, shape_color) {
        this.text = text;
        this.text_color = text_color;
        this.shape = shape;
        this.shape_color = shape_color;
    };
    //method to set color of shape, used for testing
    setColor(color) {
        this.shape_color = color;
    };
    //method to render shape and text
    render() {
     return `<svg  width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${this.getShape()}<text x="50%" y="50%" font-size="50" text-anchor="middle" fill="${this.text_color}"> ${this.text}</text></svg>`
    };
    //method to get shape of logo based on user input
    getShape() {
    switch (this.shape) {
        case 'Square':
            return new Square(this.text, this.text_color, this.shape, this.shape_color).render();
        case 'Circle':
            return new Circle(this.text, this.text_color, this.shape, this.shape_color).render();
        case 'Triangle':
            return new Triangle(this.text, this.text_color, this.shape, this.shape_color).render();
        }
    };
};
//subclasses of Shape class for each shape       
class Circle extends Shape {
    //method to render circle logo
    render() {
        // console.log('Circle color: ', this.shape_color); 
        // console.log('Circle text: ', this.text);
        // console.log('Circle text color: ', this.text_color);
        return `<circle cx="150" cy="100" r="100" fill="${this.shape_color}" />`
    };
};

class Square extends Shape {
    //method to render square logo
    render() {
        // console.log('Square color: ', this.shape_color);
        // console.log('Square text: ', this.text);
        // console.log('Square text color: ', this.text_color);
        return `<rect x="50" width="200" height="200" fill="${this.shape_color}" />`
    };
};

class Triangle extends Shape {
    //method to render triangle logo
    render() {
        // console.log('Triangle color: ', this.shape_color);
        // console.log('Triangle text: ', this.text);
        // console.log('Triangle text color: ', this.text_color); 
        return `<polygon points="150, 0 290, 200 10, 200" fill="${this.shape_color}" />`
    };
};
//export Shape class and its subclasses to be used in index.js and shapes.test.js    
module.exports = { Shape, Circle, Square, Triangle };