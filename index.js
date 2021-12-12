// Include packages needed for this application
// Dependencies and variables declared
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const path = require("path");
const generatePage = require("./utils/generateMarkdown.js");


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

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`.\dist\README.md`, data, err => {
    if (err) {
      throw err
    };
    console.log('README created!')
  });
};

// TODO: Create a function to initialize app
function init() {
  questions()
  .then(data => {
    return generatePage(data);
  })
  .then(data => {
    return writeToFile('README.md', data);
  })
  .catch(err => {
    console.log(err);
  });
  
};
  
// Function call to initialize app
init()
  
