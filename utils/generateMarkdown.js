// TODO: Create a function that returns a license badge based on which license is passed in
// allow empty => returns license badge => else/if there is no license => return an empty string
function renderLicenseBadge(license) {
  if (license === '') {
    return '';
  } else if (license == "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == "BSD 3-Clause") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license == "GNU GPL v3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == "None") {
    return `None`;
  }
}

// TODO: Create a function that returns the license link
// return link => else/if there is no license => return an empty string
function renderLicenseLink(license) {
  if (license === '') {
    return '';
  } else if (license == "Apache 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license == "BSD 3-Clause") {
    return `https://opensource.org/licenses/BSD-3-Clause`;
  } else if (license == "GNU GPL v3") {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (license == "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license == "None") {
    return `None`;
  }
}

// TODO: Create a function that returns the license section of README
// if there is no license => return an empty string => otherwise license section
function renderLicenseSection(license) {
  if (license === 'None') {
    return ``;
  } else {
    return `[${license} license](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function to generate markdown for README
// layout for generator
// REMEMBER backtick ```````` not quote '''''''' for the template literals
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Tests
  ${data.test}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Questions
  GitHub: [${data.username}](https://github.com/${data.username}) <br>
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;