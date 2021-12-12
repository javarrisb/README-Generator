/*GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/

// TODO: Include packages needed for this application
// Dependencies and variables declared
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'projectTitle',
          message: 'What is your project title? (Required)',
          validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your project title!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Write a description of your project: (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please write a description!');
              return false;
            }
          }
        },
        {
          type: 'checkbox',
          name: 'tableofContents',
          message: 'Choose the contents of your Table of Contents for README.md file',
          choices: [
            "Project Title",
            "Description",
            "Installation", 
            "Usage",
            "License",
            "Contributions",
            "Tests",
            "Questions"
          ]
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Describe the installation instructions: (Required)',
          validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('Please enter your installation instructions!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'usage',
          message: 'What is the usage for this project?',
          validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please enter information on using your application!');
              return false;
            }
          }
        },
        {
          type: 'checkbox',
          name: 'license',
          message: 'Choose the correct license for this project: ',
          choices: ['N/A', 'Apache', 'Eclipse', 'ISC', 'MIT', 'Mozilla'],
        },
        {
          type: 'input',
          name: 'contributions',
          message: 'Who contributed to this project?'
        },
        {
          type: 'input',
          name: 'tests',
          message: 'Any test included in this project>'
        },
        {
          type: 'input',
          name: 'questions',
          message: 'What do I do if there are any issues?'
        },
        {
          type: 'input',
          name: 'github',
          message: 'Please enter your Github username:'
        },
        {
          type: 'input',
          name: 'email',
          message: 'Please enter your email:'
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./dist/${fileName}`, data, err => {
    if (err) {
      throw err
    };
    console.log('README created!')
  });
};

// TODO: Create a function to initialize app
function init() {
  questions()
  .then(inquirerResponses => generateMarkdown())
  .then(generateReadme => writeToFile('README.md', generateReadme))
  .catch(err => {
    console.log(err);
  });
  
};
  
// Function call to initialize app
init()
  
