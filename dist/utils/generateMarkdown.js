// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license) {
    return `![Github license]${license}(https://img.shields.io/badge/License-ISC-blue.svg)`;
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

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  // If there is no license, return an empty string
  if (license === "N/A") {
    return "";
  } else {
    return `## License
  
  This project is licensed under the ${license} license.`;
  }
}

// create the Test Section
const createTests = tests => {
  if (!tests) {
    return "";
  } else {
    return `## Tests
    
    \`\`\`
    ${tests}
    \`\`\`
    <br />`
  }
}


// TODO: Create a function to generate markdown for README
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
  ${data.installation}
  \`\`\`
  <br />

  ## Usage

  ${data.usage} <br />

  ${renderLicenseSection(data.license)} <br />

  ## Contributions

  ${data.contributions} <br />

  
  ${createTests(data.tests)} <br />

  ## Questions?

    If there are any questions about the project, please reach me at:
    ${data.email} <br />
    Take a look at the rest of my work at:
    [${data.github}]{https://github.com/${data.github}/) <br />}

  _This README was generated with care by 
`;
}


module.exports = generateMarkdown;
