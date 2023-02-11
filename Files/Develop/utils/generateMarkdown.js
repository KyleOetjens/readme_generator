const fs = require('fs');
/*[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]
(https://opensource.org/licenses/Apache-2.0)
*/
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    let licenseBadge = data.projectLicense
    switch (licenseBadge) {
        case `Apache License 2.0`: {
            let licenseBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
            let licenseLink = `https://opensource.org/licenses/Apache-2.0`
            let licenseMd = '## License'
            generateMarkdown(data, licenseBadge,licenseMd)
        }
            break;
        case `GNU General Public License v3.0`: {
            let licenseBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
            let licenseLink = `https://www.gnu.org/licenses/gpl-3.0`
            let licenseMd = '## License'
            generateMarkdown(data, licenseBadge,licenseMd)
        }
            break;
        case `MIT License`: {
            let licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
            let licenseLink = `https://opensource.org/licenses/MIT`
            let licenseMd = '## License'
            generateMarkdown(data, licenseBadge,licenseMd)
        }
            break;
        case `BSD 2-Clause "Simplified" License`: {
            let licenseBadge = `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`
            let licenseLink = `https://opensource.org/licenses/BSD-2-Clause`
            let licenseMd = '## License'
            generateMarkdown(data, licenseBadge,licenseMd)
        }
            break;
        case `BSD 3-Clause "New" or "Revised" License`: {
            let licenseBadge = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
            let licenseLink = `https://opensource.org/licenses/BSD-3-Clause`
            let licenseMd = '## License'
            generateMarkdown(data, licenseBadge,licenseMd)
        }
            break;
        case `Boost Software License 1.0`: {
            let licenseBadge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
            let licenseLink = `https://www.boost.org/LICENSE_1_0.txt`
            let licenseMd = '## License'
            generateMarkdown(data, licenseBadge,licenseMd)
        }
            break;
        case `Creative Commons Zero v1.0 Universal`: {
            let licenseBadge = `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`
            let licenseLink = `http://creativecommons.org/publicdomain/zero/1.0/`
            let licenseMd = '## License'
            generateMarkdown(data, licenseBadge,licenseMd)
        }
            break;
        case `Eclipse Public License 2.0`: {
            let licenseBadge = `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`
            let licenseLink = `https://opensource.org/licenses/EPL-1.0`
            let licenseMd = '## License'
            generateMarkdown(data, licenseBadge,licenseMd)
        }
            break;
        case `GNU Affero General Public License v3.0`: {
            let licenseBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
            let licenseLink = `https://www.gnu.org/licenses/gpl-3.0`
            let licenseMd = '## License'
            generateMarkdown(data, licenseBadge,licenseMd)
        }
            break;
        case `GNU General Public License v2.0`: {
            let licenseBadge = `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)`
            let licenseLink = `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
            let licenseMd = '## License'
            generateMarkdown(data, licenseBadge,licenseMd)
        }
            break;
        case `Mozilla Public License 2.0`: {
            let licenseBadge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
            let licenseLink = `https://opensource.org/licenses/MPL-2.0`
            let licenseMd = '## License'
            generateMarkdown(data, licenseBadge,licenseMd)
        }
            break;
        case `The Unlicense`: {
            let licenseBadge = `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
            let licenseLink = `http://unlicense.org/`
            let licenseMd = '## License'
            generateMarkdown(data, licenseBadge,licenseMd)
        }
            break;
            case `None`: {
                let licenseBadge = ``
                let licenseLink = ``
                let licenseMd = ''
                generateMarkdown(data, licenseBadge,licenseMd)
            }
}}

/*
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }
*/

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, licenseBadge,licenseMd) {
    console.log(data.projectTitle);
    const mdFile = `# ${data.projectTitle}

## Description
${data.projectDesc}
${licenseBadge}
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


${licenseMd}

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
    fs.writeFileSync(`README.MD`, mdFile, (err) =>
        err ? console.error(err) : console.log(`Check out your README`)
    )
}
module.exports = {
    renderLicenseBadge,
    generateMarkdown
};
