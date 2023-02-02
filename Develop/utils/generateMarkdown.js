// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    return license;
  } else ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
  This project is licensed under
  ${license}
  ## Contributors
  ${contributers}
  ## Questions
  If you have any questions, please contact me at ${questions} or https://github.com/${user}.`
}

module.exports = generateMarkdown;
