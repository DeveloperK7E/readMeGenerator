// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.git}/${data.title}

  # Description
  ${data.description}
  #Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)

  # Installation
  The following dependecies are necessary and must be installed for this apllication to run properly: ${data.installation}
  # Usage
  For this a to work, you'll need: ${data.usage}
  # License
  This project is licensed under the ${data.license} License.
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
  # Contributing
  Contributors: ${data.contributing}
  # Tests
  The following is needed to run the test: ${data.test}
  # Questions
  If you have any questions about this project please contact
  * Name - ${data.creator}
  * GitHub - https://github.com/${data.git}
  * Email - ${data.email}
`
}

module.exports = generateMarkdown;