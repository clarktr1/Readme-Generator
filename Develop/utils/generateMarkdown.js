// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![Mit](https://img.shields.io/badge/License-Mit-blue)';
      break;
    case 'GNU GPLv3':
      return '![GNU](https://img.shields.io/badge/License-GNU-blue)';
      break;
    case 'Apache':
      return '![Apache](https://img.shields.io/badge/License-Apache-blue)';
      break;
    default:
      return ''
  }
}   

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[Mit](https://choosealicense.com/licenses/mit/)';
      break;
    case 'GNU GPLv3':
      return '[GNU](https://choosealicense.com/licenses/gpl-3.0/)';
      break;
    case 'Apache':
      return '[Apache](https://choosealicense.com/licenses/apache-2.0/)';
      break;
    default:
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `This project is licensed under
    ${renderLicenseLink(license)}`
  }
    return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const user = data.user;
  const title = data.title;
  const description = data.description;
  const install = data.install;
  const usage = data.usage;
  const license = data.license;
  const contributers = data.contributers;
  const questions = data.questions;

  return `# ${title}

  ${renderLicenseBadge(license)}
  

  ## Table of Contents
  • [Description](##Description)

  • [Install](##Install)

  • [Usage](##Usage)

  • [Licenses](##Licenses)

  • [Contributors](##Contributors)

  • [Questions](##Questions)

  ## Description
  ${description}
  ## Install
  ${install}
  ## Usage
  ${usage}
  ## Licenses
  ${renderLicenseSection(license)}
  ## Contributors
  ${contributers}
  ## Questions
  If you have any questions, please contact me at ${questions} or https://github.com/${user}.`
}

module.exports = generateMarkdown;
