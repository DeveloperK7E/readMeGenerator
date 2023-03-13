const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateMarkdown = require("./util/generateMarkdown");

// array of questions for user
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your Project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Project description?',
},
{
    type: 'input',
    name: 'installation',
    message: 'Installation instructions?',
},
{
    type: 'input',
    name: 'usage',
    message: 'Project Usage?',
},
{
    type: 'list',
    name: 'license',
    message: 'What license did you use?',
    choices: ['MIT', 'Apache', 'ISC', 'N/A'],
    Filter(val) {
        return val.toLowerCase();
    }
},
{
    type: 'input',
    name: 'contribution',
    message: 'Contribution info?',
},
{
    type: 'input',
    name: 'test',
    message: 'Tests?',
},
{
    type: 'input',
    name: 'git',
    message: 'Github username:',
},
{
    type: 'input',
    name: 'email',
    message: 'E-mail:',
}

];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if(err){
            return console.log(err)
        } else{
            console.log("Success")
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generateMarkdown(data));
    })
}

// function call to initialize program
init();



