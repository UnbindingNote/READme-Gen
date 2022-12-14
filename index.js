// TODO: Include packages needed for this application
const inquirer = require('inquirer'); //inquirer package
const fs = require('fs'); // read or write files to computer
const generateMarkdown = require('./generateMarkdown.js') // use generateMarkdown.js for called functions

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        //validate checks if the user left the console blank or not
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please enter your username.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter your project title.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "How would you describe your project/application?",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please write a short description of the project/application.");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license is used for this project?',
        choices: ['Apache 2.0', 'BSD 3-Clause', 'MIT', 'GNU GPL v3', 'None'],
        //options to choose from when creating README
    },
    {
        type: "input",
        name: "usage",
        message: "What does user need to know about using the repo?",
    },
    {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./README.md", generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('README.md is successfully generated!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userData) {
            writeToFile("README.md", userData);
        });
}

// Function call to initialize app
init();
