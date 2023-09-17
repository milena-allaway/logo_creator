// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Circle, Square, Triangle } = require('./lib/shapes.js');

// An array of questions for user input
const questions = [
    {   
        type: 'input',
        name: 'text',
        message: 'Type in the text for your logo, must be 1-3 characters: ',
        validate: function (value) {
            const valid = value.length > 0 && value.length < 4;
            return valid || 'Please enter a value between 1 and 3 characters long.';
        }
    },
    {   
        type: 'input',
        name: 'text_color',
        message: 'Type in a color for the text, can be a name or hexadecimal code: ',
        validate: function (value) {
            const valid = value.length > 0;
            return valid || 'Please enter a value for text color.';
        }
    },
    {  
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo: ',
        choices: ['Square', 'Circle', 'Triangle'],
    },
    {   
        type: 'input',
        name: 'shape_color',
        message: 'Type in a color for the shape, can be a name or hexadecimal code: ',
        validate: function (value) {        
            const valid = value.length > 0;
            return valid || 'Please enter a value for shape color.';
        }
    },
];

//A function to create logo file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error('Error creating logo: ', err) : console.log('logo.svg Created!')
    );
};

// A function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const shape = new Shape(data.text, data.text_color, data.shape, data.shape_color);
        const logo = shape.render();
        writeToFile('logo.svg', logo );
    })
    .catch((err) => console.error('Something went wrong: Error ', err));
};

// Function call to initialize app
init();