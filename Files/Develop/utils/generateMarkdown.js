const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log(data.projectTitle);
    const mdFile = `# ${data.projectTitle}

## Description
${data.projectDesc}

## Table of Contents (Optional)

${data.projectInstal}
${data.projectUsage}
${data.projectContrib}
${data.projectTest}
${data.projectLicense}

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.projectInstal}

## Usage

${data.projectUsage}
## Credits


## License

${data.projectLicense}
---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

${data.projectTest}`;

    createReadme(mdFile)
}
function createReadme(mdFile) {
    fs.writeFile(`README.MD`, mdFile, (err) =>
        err ? console.error(err) : console.log(`Check out your README`)
    )
}
module.exports = generateMarkdown;
