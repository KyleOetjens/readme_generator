// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require(`./utils/generateMarkdown`)
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your projects title?',
    name: 'projectTitle',
  },
  {
    type: 'input',
    message: `Provide a short description explaining the what, why, and how of your project:`,
    name: 'projectDesc',
  },
  {
    type: 'input',
    message: 'Please provide instalation instructions',
    name: 'projectInstal',
  },
  {
    type: 'input',
    message: 'Please provide usage instructions',
    name: 'projectUsage',
  },
  {
    type: 'input',
    message: 'Please provide contribution information',
    name: 'projectContrib',
  },
  {
    type: 'input',
    message: 'Please provide testing information',
    name: 'projectTest',
  },
  {
    type: 'list',
    message: 'Please select a license',
    choices: [`None`,
    `Apache License 2.0`,
    `GNU General Public License v3.0`,
    `MIT License`,
    `BSD 2-Clause "Simplified" License`,
    `BSD 3-Clause "New" or "Revised" License`,
    `Boost Software License 1.0`,
    `Creative Commons Zero v1.0 Universal`,
    `Eclipse Public License 2.0`,
    `GNU Affero General Public License v3.0`,
    `GNU General Public License v2.0`,
    `GNU Lesser General Public License v2.1`,
    `Mozilla Public License 2.0`,
    `The Unlicense`],
    name: 'projectLicense',
  },
]
// TODO: Create a function to write README file
 function createReadme(mdFile){
  fs.writeFile(`README.MD`, mdFile) 
  console.log(`got it as well`);
 }

// TODO: Create a function to initialize app
function init() {inquirer
  .prompt(questions)
  .then((data) =>{
    generateMarkdown(data)
    console.log(`thanks`);
})};
// Function call to initialize app
init()


module.exports = createReadme;
