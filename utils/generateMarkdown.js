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

const renderUsage = usage => {
  return `${usage}`
};

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
    and in the comman line run \`npm run test\``
  } else {
    return '';
  };
};

// Create the Questions section
const renderQuestions = (email, github) => {
  if (email) {
    return `If there are any questions about the project, please contact me at ${email}. You can see more of my projects at https://github.com/${github}/.
    `;
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

  ## License
  ${renderLicenseBadge(data.license)}

  ${renderLicenseSection(data.license)} <br />

  ## Contributions

  ${renderContributions(data.contributions)} <br />

  ## Tests 

  ${renderTests(data.tests)} <br />

  ## Questions?

  ${renderQuestions(data.email)}

  _This README was generated with care by 
`;
}


module.exports = generateMarkdown;
