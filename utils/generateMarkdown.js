// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license) {
    return `![license](https://img.shields.io/badge/License-ISC-blue.svg)`;
    // If there is no license, return an empty string
  } else {
    return "";
  }
};

// Create a function that returns the license link
function renderLicenseLink(license) {
  if (license) {
    return `\n* [License](#license)\n`;
    // If there is no license, return an empty string
  } else {
    return "";
  }
}

// Create title 
const renderTitle = projectTitle => {
  if (projectTitle) {
    return `${projectTitle}`
  } else {
    return "";
  }
};

// Create the description section
const renderDescription = description => {
  if (description) {
    return `${description}`
  }
};

// Create installation section
const renderInstallation = installation => {
  if (installation) {
    return `In order to use this application, please install:
    
    \`\`\`
    ${installation}
    \`\`\``
  } else {
    return '';
  }
};

// Create the Usage section
const renderUsage = usage => {
  return `${usage}`
};

// Create the Contribution section
const renderContributions = contributions => {
  return `${contributions}`
};

// Create a function that returns the license section of README
function renderLicenseSection(license) {
  // If there is no license, return an empty string
  if (license === "N/A") {
    return "";
  } else {
    return `
  This project is licensed under the ${license} license.`;
  }
}

// create the Test Section
const renderTests = tests => {
  if (tests) {
    return `In order to run tests on this application, please install:
    \`\`\`
    ${tests}
    \`\`\`
    and in the command line run \`npm run test\``
  } else {
    return '';
  };
};

// Create the Questions section
const renderQuestions = (email, github) => {
  if (email) {
    return `If there are any questions about the project, please contact me at ${email}. To see more of my work visit: https://github.com/javarrisb`
    ;
  } else {
    return '';
  }
};


// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${renderTitle(data.projectTitle)} <br />

  ${renderLicenseBadge(data.license)} <br />
   
  ## Description
  ${renderDescription(data.description)} <br />
  
  You can view the walkthrough here: https://youtu.be/u-7OuIpMsoA

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)

  <br />

  ## Installation

  \`\`\`
  ${renderInstallation(data.installation)}
  \`\`\`
  <br />

  ## Usage

  ${renderUsage(data.usage)} <br />

  ## Screenshot 

  ![Screenshot ](https://user-images.githubusercontent.com/89273544/145730253-4d1c7558-2490-472f-93af-4f62fc11ceec.png)

  ## License
  ${renderLicenseBadge(data.license)}

  ${renderLicenseSection(data.license)} <br />

  ## Contributions

  ${renderContributions(data.contributions)} <br />

  ## Tests 

  ${renderTests(data.tests)} <br />

  ## Questions?

  ${renderQuestions(data.email)}

`;
}


module.exports = generateMarkdown;
