const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


let questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Project description?',
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'Table of contents?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Installation instructions?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Project Usage?',
    },
    {
        type: 'list',
        name: 'License',
        message: 'License?',
        choices: ['MIT', 'Apache', 'ISC'],
        Filter(val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Contribution info?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Tests?',
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Any Questions?',
    }

]



