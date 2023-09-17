// Tests for shapes.js
//import { Shape, Circle, Square, Triangle } from './shapes.js'; to allow for testing
const { Triangle, Square, Circle } = require('./shapes.js');
//test suite for Shape class
describe( 'Shape', () => {
    //test for triangle, should render a blue triangle
    describe( 'Triangle', () => {
        it('should render a blue triangle', () => {
            const shape = new Triangle();
            let color = 'blue';
            shape.setColor(color);
            expect(shape.render()).toEqual(`<polygon points="150, 0 290, 200 10, 200" fill="${color}" />`);
        }); 
    });  
    //test for square, should render a yellow square
    describe('Square', () => {
        it('should render a yellow square', () => {
            const shape = new Square();
            let color = 'yellow';
            shape.setColor(color);
            expect(shape.render()).toEqual(`<rect x="50" width="200" height="200" fill="${color}" />`);
        });
    });
    //test for circle, should render a purple circle
    describe('Circle', () => {
        it('should render a purple circle', () => {
            const shape = new Circle();
            let color = 'purple';
            shape.setColor(color);
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="${color}" />`);
        });
    });
});
